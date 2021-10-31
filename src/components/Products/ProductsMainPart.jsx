import React from "react";
import Style from "./ProductsMainPart.module.css";
import SideBar from "./SideBar";

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
          <div className={`${Style.topFilterContainer}`}></div>
          {/* Product Grid */}
          <div className={`${Style.productsGrid}`}></div>
          {/* Pagination */}
          <div className={`${Style.paginationContainer}`}></div>
        </div>
      </div>
    </>
  );
}

export default ProductsMainPart;
