const Comment = require('../models/comment.model.js');

exports.getAll = async (req, res) => {
     const productID = req.query.productID;

     try {
          const comments = await Comment.find({ productID: productID });
          res.status(200).json(comments);
     }
     catch (err) {
          res.status(404).json({ message: err.message });
     }
};

exports.getOneByCustomer = async (req, res) => {
     const productID = req.query.productID;
     const customerID = req.query.customerID;

     try {
          const comment = await Comment.findOne({ productID: productID, customerID: customerID });
          res.status(200).json(comment);
     }
     catch (err) {
          res.status(404).json({ message: err.message });
     }
};

exports.createComment = async (req, res) => {
     const customerID = req.body.customerID;
     const customerName = req.body.customerName;
     const productID = req.body.productID;
     const comment = req.body.comment;
     const rating = req.body.rating;
     const time = req.body.time;

     const newComment = new Comment({
          customerID: customerID,
          customerName: customerName,
          productID: productID,
          comment: comment,
          rating: rating,
          time: time
     });

     try {
          await newComment.save();
          res.status(200).send("Comment created successfully!");
     }
     catch (err) {
          res.status(404).json({ message: err.message });
     }
};

exports.updateComment = async (req, res) => {
     const productID = req.body.productID;
     const customerID = req.body.customerID;
     const comment = req.body.comment;
     const rating = req.body.rating;
     const time = req.body.time;

     try {
          await Comment.updateOne(
               { productID: productID, customerID: customerID },
               { $set: 
                    { comment: comment, rating: rating, time: time }
               }
          );
          res.status(200).send("Comment updated successfully!");
     }
     catch (err) {
          res.status(404).json({ message: err.message });
     }
}

exports.deleteComment = async (req, res) => {
     const productID = req.body.productID;
     const customerID = req.body.customerID;

     try {
          await Comment.deleteOne({ productID: productID, customerID: customerID });
          res.status(200).send("Comment deleted successfully!");
     }
     catch (err) {
          res.status(404).json({ message: err.message });
     }
}