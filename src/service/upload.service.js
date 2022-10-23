const { images } = require("../models/detaConnection")

const uploadImage = async (contents, name) => {
  await images.put(name, { data: contents });
}

const getImage = async (name) => {
  const image = await images.get(name);
  const buffer = await image.arrayBuffer();
  return Buffer.from(buffer);
}

module.exports = {
  uploadImage,
  getImage,
}