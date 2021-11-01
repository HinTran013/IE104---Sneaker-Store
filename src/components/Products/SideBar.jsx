import React from "react";
import Style from "./SideBar.module.css";
import ColorPallette from "./ColorPallette";
import SizeGrid from "./SizeGrid";
import SubMenu from "./SubMenu";
import SideBarData from "./SideBarData";

function SideBar() {
  return (
    <>
      <div className={`${Style.sideBarContainer}`}>
        <h2>Categories</h2>

        {/* Brands */}
        <SubMenu title="Brand" listChild={SideBarData.subMenu.brand} />

        {/* Prices */}
        <SubMenu title="Price" listChild={SideBarData.subMenu.price} />

        {/* Color */}
        <h3>Color</h3>
        <ColorPallette />

        {/* Size */}
        <h3>Size</h3>
        <SizeGrid />
      </div>
    </>
  );
}

export default SideBar;
