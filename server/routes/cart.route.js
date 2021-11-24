const express = require('express');
const cartController = require('../controllers/cart.controller.js');

const router = express.Router();

router.get('/getcurrent', cartController.getCurrent);
router.post('/createcart', cartController.createCart);
router.post('/addtocart', cartController.addToCart);

module.exports = router;