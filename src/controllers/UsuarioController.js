import { Usuario } from "../models/Usuario.js";
import { Op } from "sequelize";
import sequelize from "../configs/database.js";
import { compararContrasenias, hashearContrasenia } from "../utils/auth.js";
import { generarToken } from "../utils/token.js";
import { Token } from "../models/Token.js";
import { AuthEmail } from "../emails/AuthEmail.js";
import { generarJWT } from "../utils/jwt.js";
import { agregarMinutos, validarCorreo } from "../utils/utlis.js";

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

      await Usuario.create({
        usuario,
        correo,
        edad,
        contrasenia: await hashearContrasenia(contrasenia),
        id_genero: generoId,
      });

      return res.status(201).json({
        respuesta: "Usuario creado correctamente",
        body: req.body,
      });
    } catch (error) {
      return res.sendStatus(500);
    }
  }

  static async login(req, res) {
  try {
    const { usuario, contrasenia } = req.body;

    if (!usuario || !contrasenia) {
      throw Error("Faltan credenciales");
    }

    const usuarioEncontrado = await Usuario.findOne({ where: { usuario } });
    if (!usuarioEncontrado) {
      return res.status(404).json("Usuario no encontrado");
    }

    const contraseniaCorrecta = await compararContrasenias(contrasenia, usuarioEncontrado.contrasenia);
    if (!contraseniaCorrecta) {
      return res.status(400).json("Contraseña incorrecta");
    }

    const token = generarJWT({ id: usuarioEncontrado.id });

    // Convertimos el objeto a JSON y quitamos la contraseña antes de enviarlo
    const userData = usuarioEncontrado.toJSON();
    delete userData.contrasenia;

    return res.status(200).json({
      token,
      usuario: userData
    });

  } catch (error) {
    console.error("❌ Error en login:", error);
    return res.status(500).json("Error interno del servidor");
  }
}


  static async olvideContrasenia(req, res) {
    try {
      await sequelize.transaction(async (t) => {
        const { correo } = req.body;

        if (!correo || !validarCorreo(correo)) {
          throw Error;
        }

        const usuarioEcontrado = await Usuario.findOne({
          where: { correo },
          include: { model: Token, as: "token" },
        });

        if (!usuarioEcontrado) {
          return res.status(404).json("Usuario no encontrado");
        }

        if (usuarioEcontrado.token) {
          await Token.destroy({ where: { id: usuarioEcontrado.token.id }, transaction: t });
        }

        const token = await Token.create(
          {
            token: generarToken(),
            usuarioId: usuarioEcontrado.id,
            createdAt: agregarMinutos(10),
          },
          {
            transaction: t,
          }
        );

        await AuthEmail.enviarTokenDeRecuperacion({
          usuario: usuarioEcontrado.usuario,
          correo: usuarioEcontrado.correo,
          token: token.token,
        });

        return res.status(201).json({ token: token.token, message: "Token enviado al correo" });
      });
    } catch (error) {
      return res.sendStatus(500);
    }
  }

  static async actualizarContraseniaConToken(req, res) {
    try {
      await sequelize.transaction(async (t) => {
        const { token, nuevaContrasenia } = req.body;

        if (!nuevaContrasenia || !token) {
          throw Error;
        }

        if (token.length !== 6) {
          throw Error;
        }

        const tokenEcontrado = await Token.findOne({
          where: { token },
          include: { model: Usuario, as: "usuario" },
        });

        if (!tokenEcontrado || new Date() > tokenEcontrado.createdAt || !tokenEcontrado.usuario) {
          return res.status(404).json("Token no encontrado");
        }

        const usuarioEcontrado = await Usuario.findByPk(tokenEcontrado.usuario.id);

        if (!usuarioEcontrado) {
          return res.status(404).json("Usuario no encontrado");
        }

        await tokenEcontrado.destroy({ transaction: t });

        usuarioEcontrado.contrasenia = await hashearContrasenia(nuevaContrasenia);

        await usuarioEcontrado.save({ transaction: t });

        return res.status(200).json({ message: "Contraseña actualizada correctamente" });
      });
    } catch (error) {
      return res.sendStatus(500);
    }
  }

  static async obtenerTodosLosUsuarios(req, res) {
    try {
      const users = await Usuario.findAll();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json("Error");
    }
  }

  static async obtenerUsuario(req, res) {
    try {
      const idParam = req.params.id;

      const id = Number(idParam);

      if (Number.isNaN(id) || !Number.isInteger(id)) {
        throw new Error();
      }

      const usuarioEncontrado = await Usuario.findByPk(id);

      if (!usuarioEncontrado) {
        return res.status(404).json("Usuario no encontrado");
      }

      return res.status(200).json(usuarioEncontrado);
    } catch (error) {
      return res.status(500).json("Error");
    }
  }

  static async actualizarUsuario(req, res) {
    try {
      await sequelize.transaction(async (t) => {

        const { usuario, correo, edad, generoId } = req.body;

        if (!usuario || !correo || !edad || !generoId) {
          throw Error;
        }

        const usuarioAutenticado = req.usuario;

				console.log(usuarioAutenticado)

        usuarioAutenticado.usuario = usuario;
        usuarioAutenticado.correo = correo;
        usuarioAutenticado.edad = edad;
        usuarioAutenticado.id_genero = generoId;

        await usuarioAutenticado.save({ transaction: t });

        return res.sendStatus(200);
      });
    } catch (error) {
      return res.sendStatus(500);
    }
  }


  
}
