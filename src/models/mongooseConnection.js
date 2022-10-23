require('dotenv').config();

const { CONNECT_STRING } = process.env;

let connectionString = CONNECT_STRING;

const mongoose = require('mongoose');

const connection = mongoose.createConnection(connectionString);

module.exports = connection;