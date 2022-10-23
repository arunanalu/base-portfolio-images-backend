const jwt = require('jsonwebtoken');

const API_SECRET = process.env.API_SECRET;

const JWT_CONFIG = {
  expiresIn: '365d',
  algorithm: 'HS256',
};

const generateToken = (user) => jwt.sign({ ...user }, API_SECRET, JWT_CONFIG);

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, API_SECRET);
    return decoded;
  } catch (error) {
    console.log('FALHA NA VERIFICAÇÃO');
    return null;
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
