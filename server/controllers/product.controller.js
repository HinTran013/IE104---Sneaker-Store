const Product = require('../models/product.model.js');

exports.getAllProduct = async (req, res) => {
     try {
          const product = await Product.find();
          res.status(200).json(product);
     }
     catch (err) {
          res.status(404).json({ message: err.message });
     }
};