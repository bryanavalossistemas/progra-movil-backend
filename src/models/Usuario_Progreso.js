import { DataTypes } from 'sequelize';
import sequelize from '../configs/database.js';


export const UsuarioProgreso = sequelize.define('usuario_progreso', {
  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true, 
    allowNull: false },
  completado: { type: DataTypes.BOOLEAN,},
  intentos:{ type: DataTypes.INTEGER,},
  aciertos: {type: DataTypes.INTEGER,},
  errores: {type: DataTypes.INTEGER,},
  tiempo: {type: DataTypes.INTEGER}
}, { 
  timestamps: false 
});

