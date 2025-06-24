import { DataTypes } from 'sequelize';
import sequelize from '../configs/database.js';


export const Nivel = sequelize.define('Niveles', {
  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true, 
    allowNull: false 
  },
  numero: { 
    type: DataTypes.STRING,
},
  descripcion: { 
    type: DataTypes.STRING,
},
}, { 
  timestamps: false 
});
