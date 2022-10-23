require('dotenv').config();

const { Deta } = require('deta');

const deta = Deta(process.env.PROJECT_KEY);

const users = deta.Base('users'); 

module.exports = users;