const express = require("express");
const productController = require("../controllers/productPagination.controller");

const PaginationRouter = express.Router();

PaginationRouter.get("/", productController.getProducts);

module.exports = PaginationRouter;
