import { DataTypes } from 'sequelize';
import sequelize from '../configs/database.js';

export const UsuarioInsignia = sequelize.define('usuario_insignia', {
  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true, 
    allowNull: false 
  },
  fecha_logro: {type: DataTypes.DATE}
}, { 
  timestamps: false 
});


