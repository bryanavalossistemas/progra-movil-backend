import { Usuario } from "../models/Usuario.js";
import { Op } from "sequelize";
import sequelize from "../configs/database.js";
import { checkPassword, hashPassword } from "../utils/auth.js";
import { generateToken } from "../utils/token.js";
import { Token } from "../models/Token.js";
import { AuthEmail } from "../emails/AuthEmail.js";
import { generateJWT } from "../utils/jwt.js";
import { addMinutesToCurrentDate, validateEmail } from "../utils/utlis.js";

export class UsuarioController {
  static async crearCuenta(req, res) {
    try {
      const { usuario, correo, contrasenia, edad, generoId } = req.body;
      if (!usuario || !correo || !edad || !contrasenia || !generoId) {
        throw Error;
      }
      const usuarioExists = await Usuario.findOne({ where: { usuario } });
      if (usuarioExists) {
        throw Error;
      }
      const usuarioCreado = await Usuario.create({
        usuario,
        correo,
        edad,
        contrasenia: await hashPassword(contrasenia),
        generoId: generoId,
      });
      const token = await Token.create({
        token: generateToken(),
        userId: usuarioCreado.id,
        createdAt: addMinutesToCurrentDate(10),
      });
      await AuthEmail.enviarTokenDeConfirmacion({
        usuario: usuarioCreado.usuario,
        correo: usuarioCreado.correo,
        token: token.token,
      });
      return res.status(201).json({
        respuesta: "Usuario creado correctamente",
        body: req.body,
      });
    } catch (error) {
      return res.sendStatus(500);
    }
  }

  static async confirmAccount(req, res) {
    try {
      await sequelize.transaction(async (t) => {
        const { token } = req.body;
        const tokenExists = await Token.findOne({ where: { token } });
        if (!tokenExists) {
          throw Error;
        }
        const user = await Usuario.findByPk(tokenExists.userId);
        if (!user) {
          throw Error;
        }
        if (new Date() > tokenExists.createdAt) {
          throw Error;
        }
        user.confirmed = true;
        await tokenExists.destroy({ transaction: t });
        await user.save({ transaction: t });
        return res.sendStatus(204);
      });
    } catch (error) {
      return res.sendStatus(500);
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password || !validateEmail(email)) {
        throw Error;
      }
      const user = await Usuario.findOne({ where: { email } });
      if (!user) {
        throw Error;
      }
      if (!user.confirmed) {
        throw Error;
      }
      const isPasswordCorrect = await checkPassword(password, user.password);
      if (!isPasswordCorrect) {
        throw Error;
      }
      const token = generateJWT({ id: user.id });
      return res.status(200).json(token);
    } catch (error) {
      return res.sendStatus(500);
    }
  }

  static async requestToken(req, res) {
    try {
      await sequelize.transaction(async (t) => {
        const { email } = req.body;
        if (!email || !validateEmail(email)) {
          throw Error;
        }
        const user = await Usuario.findOne({
          where: { email },
          include: { model: Token, as: "token" },
        });
        if (!user) {
          throw Error;
        }
        if (user.confirmed) {
          throw Error;
        }
        if (user.token) {
          await Token.destroy({ where: { id: user.token.id }, transaction: t });
        }
        const token = await Token.create(
          {
            token: generateToken(),
            userId: user.id,
            createdAt: addMinutesToCurrentDate(10),
          },
          {
            transaction: t,
          }
        );
        await AuthEmail.enviarTokenDeConfirmacion({
          name: `${user.firstName} ${user.lastName}`,
          email: user.email,
          token: token.token,
        });
        return res.sendStatus(201);
      });
    } catch (error) {
      return res.sendStatus(500);
    }
  }

  static async forgotPassword(req, res) {
    try {
      await sequelize.transaction(async (t) => {
        const { email } = req.body;
        if (!email || !validateEmail(email)) {
          throw Error;
        }
        const user = await Usuario.findOne({
          where: { email },
          include: { model: Token, as: "token" },
        });
        if (!user) {
          throw Error;
        }
        if (!user.confirmed) {
          throw Error;
        }
        if (user.token) {
          await Token.destroy({ where: { id: user.token.id }, transaction: t });
        }
        const token = await Token.create(
          {
            token: generateToken(),
            userId: user.id,
            createdAt: addMinutesToCurrentDate(10),
          },
          {
            transaction: t,
          }
        );
        await AuthEmail.sendPasswordResetToken({
          name: `${user.firstName} ${user.lastName}`,
          email: user.email,
          token: token.token,
        });
        return res.sendStatus(201);
      });
    } catch (error) {
      return res.sendStatus(500);
    }
  }

  static async validateToken(req, res) {
    try {
      const { token } = req.body;
      if (!token) {
        throw Error;
      }
      const tokenExists = await Token.findOne({ where: { token } });
      if (!tokenExists || new Date() > tokenExists.createdAt) {
        throw Error;
      }
      return res.sendStatus(200);
    } catch (error) {
      return res.sendStatus(500);
    }
  }

  static async updatePasswordWithToken(req, res) {
    try {
      await sequelize.transaction(async (t) => {
        const { token } = req.params;
        const { password } = req.body;
        if (!password || !token) {
          throw Error;
        }
        if (token.length !== 6) {
          throw Error;
        }
        const tokenExists = await Token.findOne({
          where: { token },
          include: { model: Usuario, as: "user" },
        });
        if (!tokenExists || new Date() > tokenExists.createdAt || !tokenExists.user) {
          throw Error;
        }
        const user = await Usuario.findByPk(tokenExists.user.id);
        if (!user || !user.confirmed) {
          throw Error;
        }
        await tokenExists.destroy({ transaction: t });
        user.password = await hashPassword(password);
        await user.save({ transaction: t });
        return res.sendStatus(204);
      });
    } catch (error) {
      return res.sendStatus(500);
    }
  }

  static async getAllUsers(req, res) {
    try {
      // const users = await Usuario.findAll({ where: { role: "USER" } });
      return res.status(200).json("Hola mundo");
    } catch (error) {
      return res.status(500).json("Error");
    }
  }

  static async getUser(req, res) {
    try {
      const idParam = req.params.id;
      const id = Number(idParam);
      if (Number.isNaN(id) || !Number.isInteger(id)) {
        throw new Error();
      }
      const user = await Usuario.findByPk(id, {
        include: [
          {
            model: Order,
            as: "orders",
            include: [
              {
                model: OrderDetail,
                as: "orderDetails",
                include: [
                  {
                    model: Product,
                    as: "product",
                  },
                ],
              },
            ],
          },
        ],
      });
      if (!user) {
        return res.status(404).json("Error");
      }
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json("Error");
    }
  }

  static async getUserAuthenticated(req, res) {
    try {
      return res.sendStatus(200);
    } catch (error) {
      return res.sendStatus(500);
    }
  }

  static async getUserData(req, res) {
    try {
      const { firstName, lastName, email } = req.user;
      return res.status(200).json({ firstName, lastName, email });
    } catch (error) {
      return res.sendStatus(500);
    }
  }

  static async updateUser(req, res) {
    try {
      await sequelize.transaction(async (t) => {
        const { firstName, lastName, email } = req.body;
        if (!firstName || !lastName || !email) {
          throw new Error();
        }
        const user = req.user;
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        await user.save({ transaction: t });
        return res.sendStatus(200);
      });
    } catch (error) {
      return res.sendStatus(500);
    }
  }

  static async changePassword(req, res) {
    try {
      await sequelize.transaction(async (t) => {
        const { password, newPassword } = req.body;
        if (!password || !newPassword) {
          return res.status(500).send("Faltan campos");
        }
        const user = req.user;
        const isPasswordCorrect = await checkPassword(password, user.password);
        if (!isPasswordCorrect) {
          throw Error;
        }
        user.password = await hashPassword(newPassword);
        await user.save({ transaction: t });
        return res.sendStatus(200);
      });
    } catch (error) {
      return res.sendStatus(500);
    }
  }

  static async deleteUser(req, res) {
    try {
      const idParam = req.params.id;
      const id = Number(idParam);
      if (Number.isNaN(id) || !Number.isInteger(id)) {
        throw new Error();
      }
      const user = await Usuario.findByPk(id);
      if (!user) {
        return res.status(404).json("Error");
      }
      await user.destroy();
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json("Error");
    }
  }

  static async loginUser(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw new Error();
      }
      const user = await Usuario.findOne({ where: { email } });
      if (!user || user.password !== password) {
        return res.status(404).json("Error");
      }
      const filteredUser = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      };
      return res.status(200).json(filteredUser);
    } catch (error) {
      return res.status(500).json("Error");
    }
  }

  static async getUsersByCreatedAt(req, res) {
    try {
      const { createdAt } = req.query;
      if (!createdAt) {
        throw new Error();
      }
      const users = await Usuario.findAll({
        where: {
          createdAt: {
            [Op.gte]: createdAt,
          },
        },
      });
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json("Error");
    }
  }
}
