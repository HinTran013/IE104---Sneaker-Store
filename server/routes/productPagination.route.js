const express = require("express");
const productController = require("../controllers/productPagination.controller");

const PaginationRouter = express.Router();

Pagination.get("/", productController.getProducts);

module.exports = PaginationRouter;
