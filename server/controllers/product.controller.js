const Product = require("../models/product.model.js");

exports.getAllProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

exports.getOneProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

exports.getSuggestProducts = async (req, res) => {
  try {
    const products = await Product.find({
      brand: req.query.brand,
    })
      .sort({ _id: -1 })
      .limit(4);

    res.json({
      products: products,
    });
  } catch (err) {}
};
