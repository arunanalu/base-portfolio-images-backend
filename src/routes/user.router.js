const express = require('express');
const userRouter = express.Router();
const userController = require('../controller/user.controller');

userRouter.post('/user', userController.createUser);

userRouter.put('/user/:id', userController.updateUser);

module.exports = userRouter;