import React, { useState } from "react";
import Style from "./SubMenu.module.css";
import { useDispatch } from "react-redux";
import {
  addBrandFilter,
  deleteBrandFilter,
} from "../../features/productArrangeSlice";
import { useSelector } from "react-redux";

//pass listChild as an array
function SubMenu({ title, listChild }) {
  const dispatch = useDispatch();
  const [isDropped, setDropState] = useState(false);
  const [isSelected, setIsSelected] = useState();

  function drop() {
    setDropState(function (preValue) {
      return !preValue;
    });
  }

  function addBrand(filterBrand) {
    dispatch(
      addBrandFilter({
        brand: filterBrand,
      })
    );
  }

  function deleteBrand(filterBrand) {
    dispatch(deleteBrandFilter());
  }

  function handleSelected(index, filterBrand) {
    if (index === isSelected) {
      setIsSelected(-1);
      deleteBrand(filterBrand);
    } else {
      setIsSelected(index);
      deleteBrand(filterBrand);
      addBrand(filterBrand);
    }
  }
  const testBrand = useSelector((state) => state.productArrange.value.brand);
  const testFilterPath = useSelector(
    (state) => state.productArrange.value.filterPath
  );

  console.log("brand: " + testBrand);
  console.log("filter path: " + testFilterPath);

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
            <li
              className={
                index === isSelected
                  ? `${Style.childText} ${Style.childTextActive}`
                  : `${Style.childText}`
              }
              key={index}
              onClick={() => handleSelected(index, item)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default SubMenu;
