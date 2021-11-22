const Product = require("../models/product.model");

exports.getProducts = async (req, res) => {
  let query;

  //get query filtering
  const reqQuery = { ...req.query };

  //field to be removed from reqQuery to not be recognized as a param
  const removeField = ["sort", "page"];
  removeField.forEach((val) => delete reqQuery[val]); // remove keys match with removeField in reqQuery

  //add dollar sign $ mongoDB database into reqQuery
  let queryStr = JSON.stringify(reqQuery);
  queryStr = queryStr.replace(
    /\b(gt|gte|lt|lte|in)\b/g,
    (match) => `$${match}`
  );

  //sorting
  query = Product.find(JSON.parse(queryStr));

  if (req.query.sort) {
    const sortByArray = req.query.sort.split(",");

    const sortByStr = sortByArray.join(" ");

    query = query.sort(sortByStr);
  }

  //pagination variable
  const PAGE_SIZE = 12;
  const page = parseInt(req.query.page || "0");

  console.log(reqQuery);
  console.log(JSON.parse(queryStr));

  //get the number of products
  const totalProducts = await Product.countDocuments({});

  //skip and limit to get pagination
  const products = await query.limit(PAGE_SIZE).skip(PAGE_SIZE * page);

  //console.log(res);

  res.json({
    totalProducts: totalProducts,
    totalPage: Math.ceil(totalProducts / PAGE_SIZE),
    products: products,
  });
};
