const {Model, DataTypes} = require('sequelize')
const sequelize = require('./db')

const usuarios = sequelize.define('usuarios', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    }, 
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
  
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
      
    }, 
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
  }, {
    sequelize,
    tableName: 'usuarios',
    timestamps: false,
  });
  
  module.exports = usuarios;

