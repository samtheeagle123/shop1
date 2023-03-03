const Sequelize = require("sequelize");
const db = require("../db");

const Order = db.define("order", {
  TotalPrice: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  Quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  Fulfill: {
    type: Sequelize.BOOLEAN,
  },
});

module.exports = Order;
