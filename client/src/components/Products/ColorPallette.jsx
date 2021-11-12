import React from "react";
import Style from "./ColorPallette.module.css";
import SideBarData from "./SideBarData";

function ColorPallette() {
  const [isClicked, setColorState] = React.useState(-1);

  function switchColor(index) {
    setColorState(index);
  }

  return (
    <>
      <div class={`${Style.PalletteContainer}`}>
        {SideBarData.colorName.map((item, index) => {
          return (
            <div
              key={index}
              className={
                isClicked === index
                  ? `${Style.singleColor} ${Style.activeColor}`
                  : `${Style.singleColor}`
              }
              style={{ backgroundColor: `${item}` }}
              onClick={() => {
                switchColor(index);
              }}
            ></div>
          );
        })}
      </div>
    </>
  );
}

export default ColorPallette;
