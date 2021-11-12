import React, { useState } from "react";
import Style from "./TagGrid.module.css";
import SideBarData from "./SideBarData";

function TagGrid() {
  const [isClicked, setTagClickState] = useState(false);

  const setClick = (index) => {
    setTagClickState(index);
  };

  return (
    <>
      <ul className={`${Style.tagContainer}`}>
        {SideBarData.tags.map((item, index) => {
          return (
            <li
              onClick={() => {
                setClick(index);
              }}
              className={
                index === isClicked
                  ? `${Style.tagItem} ${Style.tagItemActive}`
                  : `${Style.tagItem}`
              }
              key={index}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TagGrid;
