const Sequelize = require('sequelize');
const db = require('../db')

const OrderDetails = db.define('orderDetails', {
    TotalPrice: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    Quantity:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
  });


  module.exports = OrderDetails;