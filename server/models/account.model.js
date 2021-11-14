const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  customerID: {
    type: String,
    required: true,
  },
});

const Account = mongoose.model("account", accountSchema);

module.exports = Account;
