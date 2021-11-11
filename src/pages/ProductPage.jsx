import React from "react";
import backgroundImageTop from "../assets/images/productDetail/detail-product-bg.jpg";
import BackgroundWithPath from "../components/Products/BackgroundWithPath";
import ProductsMainPart from "../components/Products/ProductsMainPart";
import FloatingFilter from "../components/Products/FloatingFilter";

const ProductPage = () => {
  return (
    <div style={{ position: "relative" }}>
      {/* Image on the top of page with page title */}
      <BackgroundWithPath
        img={backgroundImageTop}
        pathText="Home/ Products"
        title="Men's shoes"
      />

      {/* Show products and side bar */}
      <ProductsMainPart />
      <FloatingFilter />
    </div>
  );
};

export default ProductPage;
