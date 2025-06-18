import { DataTypes } from 'sequelize';
import sequelize from '../configs/database.js';


export const Pregunta = sequelize.define('Pregunta', {
  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true, 
    allowNull: false },
  pregunta: { 
    type: DataTypes.STRING,
  },
  
}, { 
  timestamps: false 
});

