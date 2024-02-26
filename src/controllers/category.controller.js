//Stephanie Santos | 301348833 | 02-25-2024
const Category = require("../models/category.model");

async function getAllCategory(req, res) {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function createCategory(req, res) {
const { name} = req.body;
  const newCategory = new Category({
    name,
  });
  try {
    const savedCategory = await newCategory.save();
    res.status(201).json(savedCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
module.exports = {
  getAllCategory,
  createCategory
};
