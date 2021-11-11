import React, { useState } from "react";
import Style from "./FloatingFilter.module.css";

function FloatingFilter() {
  const [isFilterClicked, setIsFilterClicked] = useState(false);

  function toggleFilter() {
    return setIsFilterClicked(!isFilterClicked);
  }

  return (
    <>
      <div onClick={toggleFilter} className={`${Style.floatingContainer}`}>
        <i
          class={
            isFilterClicked
              ? `fas fa-times ${Style.floatingIcon}`
              : `fas fa-filter ${Style.floatingIcon}`
          }
        ></i>
      </div>
    </>
  );
}

export default FloatingFilter;
