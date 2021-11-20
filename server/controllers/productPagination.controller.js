const Product = require("../models/product.model");

// class APIfeatures {
//   constructor(query, queryString) {
//     this.query = query;
//     this.queryString = queryString;
//   }

//   filtering(){
//     const queryObj = {...this.queryString};
//     console.log(queryObj);
//     const excludedFields = ['page', 'sort', 'limit']
//   }
// }

exports.getProducts = async (req, res) => {
  //get query filtering
  let query;
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

  console.log(JSON.parse(queryStr));

  //pagination variable
  const PAGE_SIZE = 12;
  const page = parseInt(req.query.page || "0");

  console.log(reqQuery);

  //get the number of products
  const totalProducts = await Product.countDocuments({});

  //skip and limit to get pagination
  const products = await Product.find(JSON.parse(queryStr))
    .limit(PAGE_SIZE)
    .skip(PAGE_SIZE * page);

  res.json({
    totalProducts,
    totalPage: Math.ceil(totalProducts / PAGE_SIZE),
    products,
  });
};
