const express = require('express');
const userRouter = express.Router();
const userController = require('../controller/user.controller');
const authMiddleware = require('../middlewares/authMiddleware');

userRouter.post('/', userController.createUser);

userRouter.put('/:id', authMiddleware, userController.updateUser);

module.exports = userRouter;