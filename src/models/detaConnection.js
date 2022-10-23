require('dotenv').config();

const { Deta } = require('deta');

const deta = Deta(process.env.PROJECT_KEY);

const users = deta.Base('users'); 

const dataImages = deta.Base('dataimages')

const images = deta.Drive('images')

module.exports = {
  users,
  images,
  dataImages,
}