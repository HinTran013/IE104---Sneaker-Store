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

const BillDetail = mongoose.model("BillDetail", billDetailSchema);

module.exports = BillDetail;
