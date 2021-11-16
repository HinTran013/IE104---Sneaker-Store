const Product = require("../models/product.model");

exports.getProducts = async (req, res) => {
  const PAGE_SIZE = 12;
  const page = parseInt(req.query.page || "0");
  const products = await Product.find({}).limit(PAGE_SIZE);

  res.json(products);
};
