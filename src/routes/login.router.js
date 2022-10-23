const express = require('express');
const loginController = require('../controller/login.controller');

const loginRouter = express.Router();

loginRouter.post('/', loginController);

module.exports = loginRouter;