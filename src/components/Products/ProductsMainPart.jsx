import React from "react";
import Style from "./ProductsMainPart.module.css";
import SideBar from "./SideBar";
import { OneProduct } from "../ProductDetail/ProductData";
import ProductItem from "../ProductItem/ProductItem";
import TopFilter from "./TopFilter";
import Pagination from "./Pagination";

function ProductsMainPart() {
  return (
    <>
      <div className={Style.mainPartContainer}>
        {/* side bar */}
        <aside className={`${Style.sideBarContainer}`}>
          <SideBar />
        </aside>

        {/* Main part */}
        <div className={`${Style.productsShowContainer}`}>
          {/* Top filter */}
          <div className={`${Style.topFilterContainer}`}>
            <TopFilter />
          </div>
          {/* Product Grid */}
          <div className={`${Style.productsGrid}`}>
            <ProductItem data={OneProduct} />
            <ProductItem data={OneProduct} />
            <ProductItem data={OneProduct} />
            <ProductItem data={OneProduct} />
            <ProductItem data={OneProduct} />
            <ProductItem data={OneProduct} />
            <ProductItem data={OneProduct} />
            <ProductItem data={OneProduct} />
            <ProductItem data={OneProduct} />
            <ProductItem data={OneProduct} />
            <ProductItem data={OneProduct} />
            <ProductItem data={OneProduct} />
          </div>
          {/* Pagination */}
          <div className={`${Style.paginationContainer}`}>
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsMainPart;
