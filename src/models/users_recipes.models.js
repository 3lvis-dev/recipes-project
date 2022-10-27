const db = require('../utils/database');
const { DataTypes } = require('sequelize');


const BBDD = db.define('BBDD', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false
  },
});

module.exports = Categories