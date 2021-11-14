const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  shorDescription: String,
  description: String,
  price: Number,
  salePercent: Number,
  rating: Number,
  color: String,
  size: [String],
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
