//Stephanie Santos | 301348833 | 02-25-2024
const Product = require("../models/product.model")

// GET all products (api/products)
async function getAllProducts(req, res) {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// GET Product by id (api/products/id)
async function getProductById(req, res) {
  const productId = req.params.id;
  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// POST add new product (api/products)
async function addNewProduct(req, res) {
  const { name, description, price, published, category } = req.body;
  const newProduct = new Product({
    name,
    description,
    price,
    published,
    category,
  });
  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// PUT update Product by id (api/products/:id)
async function updateProductById(req, res) {
  const productId = req.params.id;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, {
      new: true,
    });
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// DELETE remove product by id (api/products/:id)
async function removeProductById(req, res) {
  const productId = req.params.id;
  try {
    const deletedProduct = await Product.findByIdAndRemove(productId);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// DELETE remove all Products (api/products)
async function removeAllProducts(req, res) {
  try {
    await Product.deleteMany();
    res.json({ message: 'All products removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// GET find all published Products (api/products/published)
async function findAllPublishedProducts(req, res) {
  try {
    const publishedProducts = await Product.find({ published: true });
    res.json(publishedProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// GET find all Products which name contains “kw” (api/products?name=[kw])
async function findProductsByName(req, res) {
  const keyword = req.query.name;
  try {
    const products = await Product.find({ name: { $regex: keyword, $options: 'i' } });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getAllProducts,
  getProductById,
  addNewProduct,
  updateProductById,
  removeProductById,
  removeAllProducts,
  findAllPublishedProducts,
  findProductsByName,
};
