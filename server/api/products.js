const router = require("express").Router();
const Products = require("../db/models/Products");
const OrderDetails = require("../db/models/OrderDetail");

router.get("/", async (req, res, next) => {
  try {
    const product = await Products.findAll();
    res.json(product);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { productId } = req.body;
    const product = await OrderDetails.create({ productId });
    res.send(product);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
