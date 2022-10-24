const { images, dataImages } = require("../models/detaConnection")

const uploadImage = async (contents, name, description) => {
  await dataImages.put({ description }, name)
  await images.put(name, { data: contents });
}

const getImage = async (name) => {
  const image = await images.get(name);
  const buffer = await image.arrayBuffer();
  const result = Buffer.from(buffer);
  return result
}

const deleteImage = async (name) => {
  await dataImages.delete(name);
  await images.delete(name);
}

const getAllImagesInfo = async () => {
  let res = await dataImages.fetch();
  let allItems = res.items;
  while (res.last) {
    res = await dataImages.fetch({}, {last: res.last});
    allItems = allItems.concat(res.items);
  }
  return allItems;
}

const updateImageInfo = async (name, description) => {
  await dataImages.put({ description }, name);
}

module.exports = {
  uploadImage,
  getImage,
  deleteImage,
  getAllImagesInfo,
  updateImageInfo
}