const { images } = require("../models/detaConnection")

const uploadImage = async (contents, name) => {
  await images.put(name, { data: contents });
}

module.exports = {
  uploadImage,
}