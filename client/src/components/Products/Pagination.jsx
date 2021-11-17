import React, { useState } from "react";
import Style from "./Pagination.module.css";

const Pagination = ({ totalPage }) => {
  const [page, setPageState] = useState(1);
  console.log(totalPage);
  const setPreviousPage = () => {
    if (page > 1) {
      setPageState(page - 1);
    }
  };

  const setNextPage = () => {
    if (page < totalPage) {
      setPageState(page + 1);
    }
  };

  return (
    <>
      <div className={`${Style.paginationContainer}`}>
        <div
          className={`${Style.arrowLeftContainer}`}
          onClick={() => {
            setPreviousPage();
          }}
        >
          <i className={`${Style.arrowLeft} fas fa-chevron-left`}></i>
        </div>

        <div className={`${Style.paginationMainPart}`}>
          <div className={`${Style.currentPageContainer}`}>Page {page}</div>
          <div className={`${Style.totalPageContainer}`}>
            <span>of {totalPage}</span>
          </div>
        </div>
        <div
          className={`${Style.arrowRightContainer}`}
          onClick={() => {
            setNextPage();
          }}
        >
          <i className={`${Style.arrowRight} fas fa-chevron-right`}></i>
        </div>
      </div>
    </>
  );
};

export default Pagination;
