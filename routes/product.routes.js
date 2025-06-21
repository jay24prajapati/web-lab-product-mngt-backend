const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controllers');
const auth = require('../middlewares/auth');


router.use(auth);

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.addProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);


module.exports = router;
