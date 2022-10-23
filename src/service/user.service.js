const User = require("../models/User");
const { cryptHashMd5 } = require("../utils/functions");


const createUser = async (name, password) => {
  const encryptedPassword = cryptHashMd5(password);
  const { id } = await User.create({ name, password: encryptedPassword });
  return { 
    id,
    name,
  }
}

const updateUser = async (id, name, password) => {
  const encryptedPassword = cryptHashMd5(password);
  const user = await User.findByIdAndUpdate(id, { name, password: encryptedPassword }, { new: true });
  return {
    id: user.id,
    name: user.name,
  }
}

const getUser = async (id) => {
  const user = await User.findById(id);
  return user
}

module.exports = {
  createUser,
  updateUser,
  getUser,
}