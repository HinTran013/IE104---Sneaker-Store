const express = require('express');
const cartController = require('../controllers/cart.controller.js');

const router = express.Router();

router.post('/createcart', cartController.createCart);
router.post('/addtocart', cartController.addToCart);

module.exports = router;