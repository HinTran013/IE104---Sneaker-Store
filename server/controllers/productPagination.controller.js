const Product = require("../models/product.model");

exports.getProducts = async (req, res) => {
  const PAGE_SIZE = 12;
  const page = parseInt(req.query.page || "0");
  const totalProducts = await Product.countDocuments({});
  const products = await Product.find({})
    .limit(PAGE_SIZE)
    .skip(PAGE_SIZE * page);

  res.json({
    totalProducts,
    totalPage: Math.ceil(totalProducts / PAGE_SIZE),
    products,
  });
};
