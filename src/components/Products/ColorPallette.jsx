import React from "react";
import Style from "./ColorPallette.module.css";
import SideBarData from "./SideBarData";

function ColorPallette() {
  return (
    <>
      <div class={`${Style.PalletteContainer}`}>
        {SideBarData.colorName.map((item, index) => {
          return (
            <div
              className={`${Style.singleColor}`}
              style={{ backgroundColor: `${item}` }}
            ></div>
          );
        })}
      </div>
    </>
  );
}

export default ColorPallette;
