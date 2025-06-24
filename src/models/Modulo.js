import { DataTypes } from 'sequelize';
import sequelize from '../configs/database.js';

export const Modulo = sequelize.define('Modulos', {
  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true, 
    allowNull: false 
  },
  nombre: DataTypes.STRING,
  descripcion: DataTypes.STRING
}, { 
  timestamps: false 
});


