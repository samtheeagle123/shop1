const Sequelize = require('sequelize');
const db = require('../db')

const Product = db.define('product', {
    Name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Desc: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    SKU: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    Price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });


  module.exports = Product;