import { DataTypes } from 'sequelize';
import sequelize from '../configs/database.js';

export const InsigniaNivel = sequelize.define('Insignia_niveles', {
  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true, 
    allowNull: false 
  },
}, { 
  timestamps: false 
});