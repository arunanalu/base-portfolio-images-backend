const loginService = require('../service/login.service');

const loginController = async (req, res, next) => {
  try {
    const { name, password } = req.body;
    const objResponse = await loginService(name, password);
    return res.status(200).json(objResponse);
  } catch (error) {
    next(error);
  }
};

module.exports = loginController;
