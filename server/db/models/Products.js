const Sequelize = require("sequelize");
const db = require("../db");

const Product = db.define("product", {
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
  imageUrl: {
    type: Sequelize.TEXT,
    allownull: false,
    defaultValue:
      "//images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg",
  },
});

module.exports = Product;
