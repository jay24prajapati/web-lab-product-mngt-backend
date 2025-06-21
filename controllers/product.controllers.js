let products = require('../data/product.data.js');
const Product = require('../models/product.model.js');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    if (products.length === 0) {
      return res.status(404).json({ message: `No products found` });
    }
    res.json(products);
  } catch (error) {
    console.error(`Error fetching products: ${error.message}`);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

exports.getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error(`Error fetching product: ${error.message}`);
    return res.status(500).json({ message: 'Internal server error' });
  }
}






exports.addProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    if (!newProduct) {
      return res.status(400).json({ message: 'Failed to add product' });
    }
    res.status(201).json({ message: 'Product added successfully', product: newProduct });
  } catch (error) {
    console.error(`Error adding product: ${error.message}`);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

exports.updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product updated successfully', product: updatedProduct });
  } catch (error) {
    console.error(`Error updating product: ${error.message}`);
    return res.status(500).json({ message: 'Internal server error' });
  }
}




exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(`Error deleting product: ${error.message}`);
    return res.status(500).json({ message: 'Internal server error' });
  }
}