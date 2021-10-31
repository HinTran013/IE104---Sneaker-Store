import React, { useState } from "react";
import Style from "./SideBar.module.css";
import SideBarData from "./SideBarData";
import ColorPallette from "./ColorPallette";
function SideBar() {
  const [size, setSize] = useState();

  const changeSize = (index) => {
    setSize(index);
  };

  return (
    <>
      <div className={`${Style.sideBarContainer}`}>
        <h2>Categories</h2>
        <h3>Color</h3>
        <div className={`${Style.colorPalletteContainer}`}>
          <ColorPallette />
        </div>
        <h3>Size</h3>
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
      </div>
    </>
  );
}

export default SideBar;
