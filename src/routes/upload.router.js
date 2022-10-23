const express = require('express');
const uploadRouter = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const uploadController = require('../controller/upload.controller');

uploadRouter.post('/', authMiddleware, uploadController.uploadImage);

uploadRouter.get('/:name', uploadController.getImage);

module.exports = uploadRouter;