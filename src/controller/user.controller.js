const userService = require('../service/user.service');

const createUser = async (req, res, next) => {
  try {
    const { name, password } = req.body;
    const user = await userService.createUser(name, password);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  createUser
}