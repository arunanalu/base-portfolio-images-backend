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

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, password } = req.body;
    const user = await userService.updateUser(id, name, password);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  createUser,
  updateUser,
}