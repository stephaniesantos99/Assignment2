//Stephanie Santos | 301348833 | 02-25-2024
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  published: {
    type: Boolean,
    default: false,
  },
  category: {
    type: String,
    required: true,
    enum: ["Electronics", "Home Appliances", "Furniture", "Clothing"], // Enforce the category options
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
