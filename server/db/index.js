//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Order = require("./models/Order");
const OrderDetail = require("./models/OrderDetail");
const Products = require("./models/Products");

//associations could go here!
//***************************************************** */
Order.belongsToMany(Products, { through: OrderDetail });
Products.belongsToMany(Order, { through: OrderDetail });
if (process.env.LOGGING === "true") {
  delete config.logging;
}
//***************************************************** */
module.exports = {
  db,
  models: {
    User,
    Order,
    OrderDetail,
    Products,
  },
};
