import { DataTypes } from 'sequelize';
import sequelize from '../configs/database.js';


export const Seccion = sequelize.define('Secciones', {
  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true, 
    allowNull: false },
  nombre: {
    type: DataTypes.STRING,
    },

}, { 
  timestamps: false 
});

