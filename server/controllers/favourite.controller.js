const Favourite = require('../models/favourite.model');

exports.getFavourites = async (req, res) => {
     const customerID = req.query.customerID;

     try {
          const favourites = await Favourite.findOne({ customerID: customerID });
          res.status(200).json(favourites);
     }
     catch (err) {
          res.status(404).json({ message: err.message });
     }
};

exports.createFavouriteList = async (req, res) => {
     const customerID = req.body.customerID;

     const favourite = new Favourite({
          customerID: customerID,
          productIDs: []
     });

     try {
          await favourite.save();
          res.send("Favourite list created successfully!");
     }
     catch (err) {
          res.status(404).json({ message: err.message });
     }
};

exports.addFavourite = async (req, res) => {
     const customerID = req.body.customerID;
     const productID = req.body.productID;

     try {
          await Favourite.updateOne(
               { customerID: customerID },
               { $push: { 'productIDs': productID } },
          )
          res.send("Add favourite successfully!");
     }
     catch (err) {
          res.status(404).json({ message: err.message });
     }
};