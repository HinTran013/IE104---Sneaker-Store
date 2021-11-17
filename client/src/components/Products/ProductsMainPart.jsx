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
  const [totalProduct, setTotalProduct] = React.useState(0);
  const [productList, setProductList] = React.useState([]);
  const [showingAmount, setShowingAmount] = React.useState({
    startProduct: 1,
    endProduct: 12,
  });

  useEffect(() => {
    getAllProduct(`http://localhost:3001/productPage?page=${pageNumber}`).then(
      (res) => {
        setProductList(res.products);

        setTotalPage(res.totalPage);
        setTotalProduct(res.totalProducts);
        console.log(res);
      }
    );
  }, [pageNumber]);

  function changePage(number) {
    setPageNumber(number);
  }

  function setPrevShowingAmount() {
    if (showingAmount.startProduct !== 1) {
      setShowingAmount((prev) => {
        if (prev.startProduct + 12 > totalProduct) {
          return {
            startProduct: prev.startProduct - 12,
            endProduct: prev.startProduct - 1,
          };
        }

        return {
          startProduct: prev.startProduct - 12,
          endProduct: prev.endProduct - 12,
        };
      });
    }
  }

  function setNextShowingAmount() {
    if (showingAmount.endProduct < totalProduct) {
      setShowingAmount((prev) => {
        if (prev.endProduct + 12 >= totalProduct) {
          return {
            startProduct: prev.startProduct + 12,
            endProduct: totalProduct,
          };
        }

        return {
          startProduct: prev.startProduct + 12,
          endProduct: prev.endProduct + 12,
        };
      });
    }
  }

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
            <TopFilter total={totalProduct} showingAmount={showingAmount} />
          </div>
          {/* Product Grid */}
          <div className={`${Style.productsGrid}`}>
            {productList.map((product) => {
              return <ProductItem key={product._id} data={product} />;
            })}
          </div>
          {/* Pagination */}
          <div className={`${Style.paginationContainer}`}>
            <Pagination
              total={totalPage}
              pageNumber={pageNumber}
              changePage={changePage}
              setPrevShowingAmount={setPrevShowingAmount}
              setNextShowingAmount={setNextShowingAmount}
            />
          </div>

          <div className={`${Style.paginationContainer}`}></div>
        </div>
      </div>
    </>
  );
}

export default ProductsMainPart;
