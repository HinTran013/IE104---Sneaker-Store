const mongoose = require("mongoose");
const Product = require("./product.model");

const cartDetailSchema = new mongoose.Schema({
  cartID: {
    type: String,
    required: true,
  },
  productID: {
    type: String,
    required: true,
  },
});

const CartDetail = mongoose.model("CartDetail", cartDetailSchema);

module.exports = CartDetail;
