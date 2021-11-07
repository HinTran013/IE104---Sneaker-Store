import React from "react";
import Style from "./SideBar.module.css";
import ColorPallette from "./ColorPallette";
import SizeGrid from "./SizeGrid";
import SubMenu from "./SubMenu";
import SideBarData from "./SideBarData";
import TagGrid from "./TagGrid";

function SideBar() {
  return (
    <>
      <div className={`${Style.sideBarContainer}`}>
        <h2>Categories</h2>

        {/* Brands */}
        <div style={{ marginBottom: "15px" }}>
          <SubMenu title="Brand" listChild={SideBarData.subMenu.brand} />
        </div>

        {/* Prices */}
        <div style={{ marginBottom: "15px" }}>
          <SubMenu title="Price" listChild={SideBarData.subMenu.price} />
        </div>

        {/* Color */}
        <div style={{ marginBottom: "15px" }}>
          <h3>Color</h3>
          <ColorPallette />
        </div>

        {/* Size */}
        <div style={{ marginBottom: "15px" }}>
          <h3>Size</h3>
          <SizeGrid />
        </div>

        {/* Tag Grid */}
        <h3>Tags</h3>
        <TagGrid />
      </div>
    </>
  );
}

export default SideBar;
