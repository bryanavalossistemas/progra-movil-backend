import sequelize from "../configs/database.js";
import { DataTypes } from "sequelize";

export const Usuario = sequelize.define(
  "Usuario",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    usuario: {
      type: DataTypes.STRING,
    },
    correo: {
      type: DataTypes.STRING,
    },
    contrasenia: {
      type: DataTypes.STRING,
    },
    edad: {
      type: DataTypes.INTEGER,
    },
    vidas: {
      type: DataTypes.INTEGER,
      defaultValue: 3,
    },
    experiencia: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    nivel_experiencia: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    confirmed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
