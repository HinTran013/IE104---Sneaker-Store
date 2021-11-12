import React, { useState } from "react";
import Style from "./SubMenu.module.css";

//pass listChild as an array
function SubMenu({ title, listChild }) {
  const [isDropped, setDropState] = useState(false);

  function drop() {
    setDropState(function (preValue) {
      return !preValue;
    });
  }

  return (
    <>
      <div
        className={`${Style.titleContainer}`}
        onClick={() => {
          drop();
        }}
      >
        <h3 className={`${Style.titleText}`}>{title}</h3>
        <i
          className={
            isDropped
              ? `fas fa-chevron-down ${Style.arrow} ${Style.arrowActive}`
              : `fas fa-chevron-down ${Style.arrow}`
          }
        ></i>
      </div>

      <ul
        className={
          isDropped
            ? `${Style.childContainer} ${Style.childContainerActive}`
            : `${Style.childContainer}`
        }
        key={title}
      >
        {listChild.map((item, index) => {
          return (
            <li className={`${Style.childText}`} key={index}>
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default SubMenu;
