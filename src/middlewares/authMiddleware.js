const { verifyToken } = require("../service/auth.service");
const { errorConstructor } = require("../utils/functions");

module.exports = async (req, _res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) { throw errorConstructor(404, 'Está faltando o token'); }

    const user = verifyToken(authorization);
    if (!user) throw errorConstructor(401, 'Token expirado ou inválido');
    req.user = user;
    next();
  } catch (error) {
    console.log('FALHA AUTH');
    next(error);
  }
};