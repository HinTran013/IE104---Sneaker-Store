const mongoose = require("mongoose");

const billDetailSchema = mongoose.Schema({
  billID: {
    type: String,
    required: true,
  },
  productID: {
    type: String,
    required: true,
  },
  quantity: Number,
});

const BillDetail = mongoose.model("bill_detail", billDetailSchema);

module.exports = BillDetail;
