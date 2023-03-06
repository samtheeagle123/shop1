//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Order = require("./models/Order");
const OrderDetail = require("./models/OrderDetail");
const Product = require("./models/Products");

//associations could go here!
//***************************************************** */
User.hasMany(Order);
Order.belongsTo(User)

Order.belongsToMany(Product, { through: OrderDetail });
Product.belongsToMany(Order, { through: OrderDetail });
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
    Product,
  },
};
