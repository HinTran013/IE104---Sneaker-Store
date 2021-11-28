import React, { useEffect } from "react";
import Style from "./ProductsMainPart.module.css";
import SideBar from "./SideBar";
import ProductItem from "../ProductItem/ProductItem";
import TopFilter from "./TopFilter";
import Pagination from "./Pagination";
import { getAllProduct } from "../../api/paginationProductAPI";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { resetFilter } from "../../features/productArrangeSlice";

function ProductsMainPart(props) {
  //get filter global state from redux
  const filterPath = useSelector(
    (state) => state.productArrange.value.filterPath
  );

  console.log(filterPath);

  const dispatch = useDispatch();

  const [pageNumber, setPageNumber] = React.useState(0);
  const [totalPage, setTotalPage] = React.useState(0);
  const [totalProduct, setTotalProduct] = React.useState(0);
  const [productList, setProductList] = React.useState([]);
  const [showingAmount, setShowingAmount] = React.useState({
    startProduct: 1,
    endProduct: 12,
  });

  useEffect(() => {
    dispatch(resetFilter());

    getAllProduct(`http://localhost:3001/productPage${filterPath}`).then(
      (res) => {
        setProductList(res.products);
        setTotalPage(res.totalPage);
        setTotalProduct(res.totalProducts);
      }
    );
  }, []);

  useEffect(() => {
    getAllProduct(
      `http://localhost:3001/productPage?page=${pageNumber}${filterPath}`
    ).then((res) => {
      setProductList(res.products);
      setTotalPage(res.totalPage);
      setTotalProduct(res.totalProducts);
    });
  }, [pageNumber, filterPath]);

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
