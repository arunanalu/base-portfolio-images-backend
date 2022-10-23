const User = require("../models/User");
const { errorConstructor, cryptHashMd5 } = require("../utils/functions");
const { generateToken } = require("./auth.service");


const loginService = async (name, password) => {
  const foundUser = await User.findOne({ name });
  const encryptedPassword = cryptHashMd5(password);
  if (!foundUser || encryptedPassword !== foundUser.password) {
    throw errorConstructor(404, 'Usuário não encontrado ou senha incorreta');
  }
  const { id: foundUserId, name: foundUserName } = foundUser;
  const tokenObj = {
    id: foundUserId,
    name: foundUserName,
  }
  const token = generateToken(tokenObj);
  return { token, name };
};

module.exports = loginService;