const router = require("express").Router();
const {
  models: { User },
} = require("../db");
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
      const users = await User.findAll({
          where: req.query,
          attributes: ['id','firstName', 'lastName', 'username'],
      })
      res.json(users)
  } catch (err) {
      next(err)
  }
})

router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.json(user);
  } catch (error) {
    next(error);
  }
});


router.put("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    const updatedUser = await user.update(req.body);
    res.send(updatedUser);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
      const user = await User.findByPk(req.params.id);
      if (user) {
          await user.destroy();
          res.status(204).end();
      } else {
          res.status(404).json({ message: 'User not found' });
      }
  } catch (err) {
      next(err)
  }
});



