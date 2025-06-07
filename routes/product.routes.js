const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controllers');

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.addProduct);
router.post('/:id', productController.updateProduct);
router.post('/:id', productController.deleteProduct);


module.exports = router;
