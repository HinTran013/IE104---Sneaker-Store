const Cart = require('../models/cart.model.js');

exports.getCurrent = async (req, res) => {
     const customerID = req.query.customerID;
     
     try {
          const customer = await Cart.findOne({ customerID: customerID, status: 'pending' });
          res.status(200).json(customer);
     }
     catch (err) {
          res.status(404).json({ message: err.message });
     }
};

exports.createCart = async (req, res) => {
     const customerID = req.body.customerID;

     const cart = new Cart({
          customerID: customerID,
          status: 'pending',
          products: []
     });

     try {
          await cart.save();
          res.send("Cart created successfully!");
     }
     catch (err) {
          res.status(404).json({ message: err.message });
     }
};

exports.addToCart = async (req, res) => {
     const customerID = req.body.customerID;
     const id = req.body.id;
     const name = req.body.name;
     const brand = req.body.brand;
     const price = req.body.price;
     const size = req.body.size;
     const color = req.body.color;

     const product = {
          id: id,
          name: name,
          brand: brand,
          price: price,
          size: size,
          color: color
     }

     try {
          await Cart.updateOne(
               { customerID: customerID },
               { $push: { 'products': product } },
          )
          res.send("Add product to cart successfully!");
     }
     catch (err) {
          res.status(404).json({ message: err.message });
     }
};