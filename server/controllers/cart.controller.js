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
          products: [],
          total: 0
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
     const salePercent = req.body.salePercent;
     const quantity = req.body.quantity;

     const product = {
          id: id,
          name: name,
          brand: brand,
          price: price,
          size: size,
          color: color,
          salePercent: salePercent,
          quantity: quantity
     }

     try {
          await Cart.updateOne(
               { customerID: customerID, status: 'pending' },
               { $push: { 'products': product } },
          )
          res.send("Add product to cart successfully!");
     }
     catch (err) {
          res.status(404).json({ message: err.message });
     }
};

exports.removeCartItem = async (req, res) => {
     const customerID = req.body.customerID;
     const productID = req.body.productID;

     try {
          await Cart.updateOne(
               { customerID: customerID, status: 'pending' },
               { $pull: { 'products': { id: productID }} },
          )
          res.send("Removed successfully!");
     }
     catch (err) {
          res.status(404).json({ message: err.message });
     }
};

exports.checkout = async (req, res) => {
     const customerID = req.body.customerID;
     const total = req.body.total;

     try {
          await Cart.updateOne(
               { customerID: customerID, status: 'pending' },
               { 
                    $set: { 'status': 'done', 'total': total },
               },
          )
          res.send("Checkout successfully!");
     }
     catch (err) {
          res.status(404).json({ message: err.message });
     }
};

exports.updateQuantity = async (req, res) => {
     const customerID = req.body.customerID;
     const productID = req.body.productID;
     const quantity = req.body.quantity;

     try {
          await Cart.updateOne(
               { customerID: customerID, status: 'pending', 'products.id': productID },
               {
                    $set: { 'products.$.quantity': quantity },
               },
          )
          res.send("Update quantity successfully!");
     }
     catch (err) {
          res.status(404).json({ message: err.message });
     }
};