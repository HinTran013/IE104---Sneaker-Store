const express = require("express");
const cartController = require("../controllers/cart.controller.js");

const router = express.Router();

router.get("/getcurrent", cartController.getCurrent);
router.post("/createcart", cartController.createCart);
router.post("/addtocart", cartController.addToCart);
router.post("/removeone", cartController.removeCartItem);
router.post("/checkout", cartController.checkout);
router.post("/updatequantity", cartController.updateQuantity);
router.get("/history", cartController.getHistory);

module.exports = router;
