import React from "react";
import backgroundImageTop from "../assets/images/productDetail/detail-product-bg.jpg";
import BackgroundWithPath from "../components/Products/BackgroundWithPath";
import ProductsMainPart from "../components/Products/ProductsMainPart";

const ProductPage = () => {
  return (
    <>
      {/* Image on the top of page with page title */}
      <BackgroundWithPath
        img={backgroundImageTop}
        pathText="Home/ Products"
        title="Men's shoes"
      />

      {/* Show products and side bar */}
      <ProductsMainPart />
    </>
  );
};

export default ProductPage;
