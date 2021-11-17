import React, { useEffect } from "react";
import Style from "./ProductsMainPart.module.css";
import SideBar from "./SideBar";
import ProductItem from "../ProductItem/ProductItem";
import TopFilter from "./TopFilter";
import Pagination from "./Pagination";
import { getAllProduct } from "../../api/paginationProductAPI";

function ProductsMainPart(props) {
  const [pageNumber, setPageNumber] = React.useState(0);
  const [totalPage, setTotalPage] = React.useState(0);
  const [productList, setProductList] = React.useState([]);

  useEffect(() => {
    getAllProduct().then((res) => {
      setProductList(res.products);
      setTotalPage(res.totalPage);
    });
  }, []);

  return (
    <>
      <div className={Style.mainPartContainer}>
        {/* side bar */}
        <aside className={`${Style.sideBarContainer}`}>
          <SideBar
            showMobileSideBar={props.showMobileSideBar}
            toggleMobileSideBar={props.toggleMobileSideBar}
          />
        </aside>

        {/* Main part */}
        <div className={`${Style.productsShowContainer}`}>
          {/* Top filter */}
          <div className={`${Style.topFilterContainer}`}>
            <TopFilter />
          </div>
          {/* Product Grid */}
          <div className={`${Style.productsGrid}`}>
            {productList.map((product) => {
              return <ProductItem key={product._id} data={product} />;
            })}
          </div>
          {/* Pagination */}
          <div className={`${Style.paginationContainer}`}>
            <Pagination total={totalPage} />
          </div>

          <div className={`${Style.paginationContainer}`}></div>
        </div>
      </div>
    </>
  );
}

export default ProductsMainPart;
