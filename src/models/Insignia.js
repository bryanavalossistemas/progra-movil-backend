import { DataTypes } from 'sequelize';
import sequelize from '../configs/database.js';


export const Insignia = sequelize.define('Insignia', {
  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true, 
    allowNull: false },
  nombre: {type: DataTypes.STRING,},
  imagen: {type:DataTypes.STRING,},
  descripcion: {type: DataTypes.STRING,},
}, { 
  timestamps: false 
});

