//Stephanie Santos | 301348833 | 02-25-2024
const mongoose = require("mongoose");
require("dotenv").config();
const config = require('config');
const dbConfig = config.get('Marketplace.dev.MONGO_URL');

async function mongoConnect() {
  mongoose.set('strictQuery', false);
  await mongoose.connect(dbConfig);
  console.log("Marketplace Database connected..");
}

module.exports = {
  mongoConnect,
}