import { DataTypes } from 'sequelize';
import sequelize from '../configs/database.js';


export const UsuarioProgreso = sequelize.define('usuario_progreso', {
  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true, 
    allowNull: false },
  completado: { type: DataTypes.BOOLEAN, defaultValue: false},
  intentos:{ type: DataTypes.INTEGER, defaultValue: 0},
  aciertos: {type: DataTypes.INTEGER, defaultValue: 0},
  errores: {type: DataTypes.INTEGER, defaultValue:0},
  tiempo: {type: DataTypes.INTEGER, defaultValue:0}
}, { 
  timestamps: false 
});

