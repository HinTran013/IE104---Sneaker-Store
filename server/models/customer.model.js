const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: String,
  gender: Boolean,
  phone: String,
  address: String,
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
