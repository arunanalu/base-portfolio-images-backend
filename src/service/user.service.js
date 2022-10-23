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

module.exports = {
  createUser
}