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

const getImage = async (req, res, next) => {
  try {
    const image = await uploadService.getImage(req.params.name);
    // res.writeHead(200, {
    //   'Content-Type': 'image/jpeg',
    //   'Content-Length': image.length
    // }).end(image);
    res.status(200).send(image);
  } catch (error) {
    next(error);
  }
}

const deleteImage = async (req, res, next) => {
  try {
    const { name } = req.params;
    await uploadService.deleteImage(name);
    res.status(200).json({ message: 'Imagem deletada com sucesso!' });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  uploadImage,
  getImage,
  deleteImage,
}