const router = require("express").Router();
const Products = require("../db/models/Products");

router.get("/", async (req, res, next) => {
  try {
    const product = await Products.findAll();
    res.json(product);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

// router.get("/:productId", async (req, res, next) => {
//   try {
//     const id = req.params.productId;
//     const product = await Products.findOne({
//       where: {
//         id: id,
//       },
//     });
//     res.send(product);
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = router;
