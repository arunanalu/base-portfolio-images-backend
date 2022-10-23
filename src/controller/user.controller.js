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
    const { name, password } = req.body;
    const { id } = req.user
    await userService.updateUser(id, name, password);
    res.status(201).json({ message: 'Usuario atualizado com sucesso!' });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  createUser,
  updateUser,
}