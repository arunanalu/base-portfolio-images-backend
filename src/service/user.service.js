const { users } = require("../models/detaConnection");
const { cryptHashMd5 } = require("../utils/functions");


const createUser = async (name, password) => {
  const encryptedPassword = cryptHashMd5(password);
  await users.put({ name, password: encryptedPassword });
  return `Usuario ${name} criado com sucesso!`;
}

const deleteUser = async (id) => {
  await users.delete(id);
}

const getUserByName = async (name) => {
  const { items: user } = await users.fetch({"name": name});
  if (user.length === 0) {
    return null;
  }
  return user[0];
}

const updateUser = async (id, name, password) => {
  const encryptedPassword = cryptHashMd5(password);
  await users.put({ name, password: encryptedPassword }, id);
}

module.exports = {
  createUser,
  updateUser,
  getUserByName,
  deleteUser,
}