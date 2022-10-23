const express = require('express');
const uploadRouter = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const uploadController = require('../controller/upload.controller');

uploadRouter.post('/', authMiddleware, uploadController.uploadImage);

uploadRouter.get('/:name', uploadController.getImage);

uploadRouter.delete('/:name', authMiddleware, uploadController.deleteImage);

module.exports = uploadRouter;