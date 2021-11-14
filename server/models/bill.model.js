const mongoose = require("mongoose");

const billSchema = new mongoose.Schema({
  customerID: String,
  time: Date,
  subPrice: Number,
  saleAmount: Number,
  totalPrice: Number,
});

const Bill = mongoose.model("bill", billSchema);

module.exports = Bill;
