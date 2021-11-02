import React from "react";
import Style from "./TopFilter.module.css";

function TopFilter() {
  return (
    <>
      <div className={`${Style.filterContainer}`}>
        <div className={`${Style.showingAmount}`}>
          Showing 1 - 9 of 20 results
        </div>
        <select name="" id="" className={`${Style.selection}`}>
          <option value="" className={`${Style.singleOption}`}>
            Date, new to old
          </option>
          <option value="" className={`${Style.singleOption}`}>
            Date, old to new
          </option>
          <option value="" className={`${Style.singleOption}`}>
            Best Selling
          </option>
          <option value="" className={`${Style.singleOption}`}>
            Price, low to high
          </option>
          <option value="" className={`${Style.singleOption}`}>
            Price, high to low
          </option>
        </select>
      </div>
    </>
  );
}

export default TopFilter;
