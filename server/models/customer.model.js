const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
  name: String,
  gender: Boolean,
  phone: Number,
  address: String,
});

const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;
