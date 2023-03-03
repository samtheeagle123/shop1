const Sequelize = require("sequelize");
const db = require("../db");

const Order = db.define("order", {
  Fulfill: {
    type: Sequelize.BOOLEAN,
  },
});

module.exports = Order;
