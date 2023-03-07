//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Order = require("./models/Order");
const OrderDetails = require("./models/OrderDetails");
const Product = require("./models/Products");

//associations could go here!
//***************************************************** */
User.hasMany(Order);
Order.belongsToMany(Product, { through: OrderDetails });
Product.belongsToMany(Order, { through: OrderDetails });
if (process.env.LOGGING === "true") {
  delete config.logging;
}
//***************************************************** */
module.exports = {
  db,
  models: {
    User,
    Order,
    OrderDetails,
    Product,
  },
};
