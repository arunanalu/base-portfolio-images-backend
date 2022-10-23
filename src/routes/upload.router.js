const express = require('express');
const uploadRouter = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const uploadController = require('../controller/upload.controller');

uploadRouter.post('/image', authMiddleware, uploadController.uploadImage);

module.exports = uploadRouter;