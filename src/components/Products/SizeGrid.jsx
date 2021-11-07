import React, { useState } from "react";
import SideBarData from "./SideBarData";
import Style from "./SizeGrid.module.css";

function SizeGrid() {
  const [size, setSize] = useState();

  const changeSize = (index) => {
    setSize(index);
  };

  return (
    <>
      <div className={Style.sizeContainer}>
        {SideBarData.size.map((item, index) => (
          <div
            className={
              index === size
                ? `${Style.sizeItem} ${Style.sizeActive}`
                : Style.sizeItem
            }
            key={index}
            onClick={() => changeSize(index)}
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
}

export default SizeGrid;
