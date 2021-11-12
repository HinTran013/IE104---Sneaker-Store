const express = require('express');
const productController = require('../controllers/product.controller.js');

const router = express.Router();

router.get('/', productController.getAllProduct);

module.exports = router;