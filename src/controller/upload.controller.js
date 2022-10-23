const uploadService = require('../service/upload.service');

const uploadImage = async (req, res, next) => {
  try {
    const contents = req.files.image.data;
    const fileName = req.files.image.name;
    // const name = req.body.description;
    await uploadService.uploadImage(contents, fileName);
    res.status(201).json({ message: 'Imagem salva com sucesso!' });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  uploadImage,
}