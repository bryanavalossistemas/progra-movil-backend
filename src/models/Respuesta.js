import { DataTypes } from 'sequelize';
import sequelize from '../configs/database.js';


export const Respuesta = sequelize.define('Respuesta', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  respuesta:{ type: DataTypes.STRING,},
  correcta: { type:DataTypes.BOOLEAN,}
}, {
  timestamps: false 
});


