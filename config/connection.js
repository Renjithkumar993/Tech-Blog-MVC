const Sequelize = require('sequelize');
const mysql2 = require('mysql2');
require('dotenv').config();

const connectionUrl = process.env.DATABASE_URL;
const sequelize = new Sequelize(connectionUrl, {
  dialect: 'mysql',
  dialectModule: mysql2,
  logging: false,
  ssl: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});


module.exports = sequelize;
