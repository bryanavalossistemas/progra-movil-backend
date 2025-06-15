import sequelize from "./database.js";
import colors from "colors";
import { Usuario } from "../models/Usuario.js";
import { Genero } from "../models/Genero.js";
import { Token } from "../models/Token.js";

async function connectDataBase() {
  try {
    Genero.hasMany(Usuario, {
      foreignKey: "generoId",
      as: "usuarios",
    });
    Usuario.belongsTo(Genero, {
      foreignKey: "generoId",
      as: "genero",
    });

    Usuario.hasOne(Token, {
      foreignKey: "usuarioId",
      as: "token",
    });
    Token.belongsTo(Usuario, {
      foreignKey: "usuarioId",
      as: "usuario",
    });

    await sequelize.authenticate();
    await sequelize.sync({ force: false });

    console.log(colors.blue.bold("CONEXIÓN EXITOSA A LA BASE DE DATOS"));
  } catch (error) {
    console.log(colors.red.bold("HUBO UN ERROR AL CONECTARSE A LA BASE DE DATOS"));
    console.log(error);
  }
}

export default connectDataBase;
