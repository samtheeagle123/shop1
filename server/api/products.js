const router = require("express").Router();
const Products = require("../db/models/Products");
const OrderDetails = require("../db/models/OrderDetails");
const Order = require("../db/models/Order");

router.get("/", async (req, res, next) => {
  try {
    const product = await Products.findAll();
    res.json(product);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.get("/:productsId", async (req, res, next) => {
  try {
    const id = req.params.productsId;
    const product = await Products.findOne({
      where: {
        id: id,
      },
    });
    res.json(product);
  } catch (err) {
    next(err);
  }
});

// router.post("/", async (req, res, next) => {
//   try {
//     const { productId } = req.body;
//     const product = await OrderDetails.create({ productId });
//     res.send(product);
//   } catch (err) {
//     next(err);
//   }
// });

router.post("/products", async (req, res) => {
  try {
    const { productId, price, quantity } = req.body;
    const newOrder = await Order.create({ Fulfill: false });
    const newOrderDetails = await OrderDetails.create({
      TotalPrice: price * quantity,
      Quantity: quantity,
      productId: productId,
      orderId: newOrder.id,
    });
    res.json({ newOrder, newOrderDetails });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
