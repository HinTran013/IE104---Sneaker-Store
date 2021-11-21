const mongoose = require("mongoose");

const favouriteSchema = new mongoose.Schema({
     customerID: {
          type: String,
          required: true,
     },
     productIDs: [String],
});

const Favourite = mongoose.model("Favourite", favouriteSchema);

module.exports = Favourite;
