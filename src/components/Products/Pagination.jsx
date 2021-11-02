import React, { useState } from "react";
import Style from "./Pagination.module.css";

const Pagination = () => {
  const maxPage = 3;

  const [page, setPageState] = useState(1);

  const setPreviousPage = () => {
    if (page > 1) {
      setPageState(page - 1);
    }
  };

  const setNextPage = () => {
    if (page < maxPage) {
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
            <span>of {maxPage}</span>
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
