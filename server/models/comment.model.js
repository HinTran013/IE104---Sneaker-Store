const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
     customerID: {
          type: String,
          required: true,
     },
     customerName: String,
     productID: {
          type: String,
          required: true,
     },
     comment: String,
     rating: Number,
     time: String
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
