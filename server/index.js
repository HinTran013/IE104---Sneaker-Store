const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const customerRoutes = require("./routes/customer.route.js");
const productRoutes = require("./routes/product.route.js");
const productPaginationRoutes = require("./routes/productPagination.route");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/customer", customerRoutes);
app.use("/product", productRoutes);
app.use("/productPage", productPaginationRoutes);

const CONNECT_URL =
  "mongodb+srv://johnnyluu:johnnyluu123@cluster0.29gji.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3001;

mongoose
  .connect(CONNECT_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
