const express = require('express');
const userRouter = express.Router();
const userController = require('../controller/user.controller');

userRouter.post('/user', userController.createUser);

module.exports = userRouter;