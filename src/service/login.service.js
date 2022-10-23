const users = require("../models/detaConnection");
const User = require("../models/user");
const { errorConstructor, cryptHashMd5 } = require("../utils/functions");
const { generateToken } = require("./auth.service");
const { getUserByName } = require("./user.service");


const loginService = async (name, password) => {
  const foundUser = await getUserByName(name);
  const encryptedPassword = cryptHashMd5(password);
  if (!foundUser || encryptedPassword !== foundUser.password) {
    throw errorConstructor(404, 'Usuário não encontrado ou senha incorreta');
  }
  const { key } = foundUser;
  const tokenObj = {
    id: key,
    name,
  }
  const token = generateToken(tokenObj);
  return { token, ...tokenObj };
};

module.exports = loginService;