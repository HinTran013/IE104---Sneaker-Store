const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  customerID: {
    type: String,
    required: true,
  },
  status: String,
  products: [Object],
  total: Number,
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
