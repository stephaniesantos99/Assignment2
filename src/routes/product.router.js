//Stephanie Santos | 301348833 | 02-25-2024
const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  addNewProduct,
  updateProductById,
  removeProductById,
  removeAllProducts,
  findAllPublishedProducts,
  findProductsByName,
} = require("../controllers/product.controller");

// GET all products (api/products)
router.get("/api/products", getAllProducts);

// GET find all published Products (api/products/published)
router.get("/api/products/published", findAllPublishedProducts);

// GET Product by id (api/products/id)
router.get("/api/products/:id", getProductById);

// POST add new product (api/products)
router.post("/api/products", addNewProduct);

// PUT update Product by id (api/products/:id)
router.put("/api/products/:id", updateProductById);

// DELETE remove product by id (api/products/:id)
router.delete("/api/products/:id", removeProductById);

// DELETE remove all Products (api/products)
router.delete("/api/products", removeAllProducts);

// GET find all Products which name contains “kw” (api/products?name=[kw])
router.get("/api/products", findProductsByName);

module.exports = router;
