import React from "react";
import { Link } from "react-router-dom";
import { Brands } from "./BrandData";
// import NikeBrand from '../../assets/logos/nike-logo.svg'
// import AdidasBrand from '../../assets/logos/adidas-logo.svg'
// import PumaBrand from '../../assets/logos/puma-logo.svg'
// import JordanBrand from '../../assets/logos/air-jordan-logo.svg'
// import ConverseBrand from '../../assets/logos/converse-logo.svg'
// import NewBalanceBrand from '../../assets/logos/new-balance-logo.svg'
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="header__container">
        <h3 className="header__logo">Logo</h3>

        <ul className="header__navbar">
          <li className="header__navbar-item">
            <Link to="/">
              <p>Home</p>
            </Link>
          </li>

          <li className="header__navbar-item" id="navbar__product">
            <Link to="/product">
              <p>Product</p>
            </Link>

            <div className="navbar__product-dropdown">
              {Brands.map((item, index) => {
                return (
                  <div className="navbar__product-container" key={index}>
                    <Link className="navbar__product-item" to={item.path}>
                      <img
                        className="navbar__product-item__img"
                        src={item.logo}
                      />
                      <h4>{item.title}</h4>
                    </Link>
                  </div>
                );
              })}
            </div>
          </li>

          <li className="header__navbar-item">
            <Link to="/about-us">
              <p>About us</p>
            </Link>
          </li>

          <li className="header__navbar-item">
            <Link to="/blog">
              <p>Blog</p>
            </Link>
          </li>
        </ul>
        <button className="header__btn">Sign up</button>
      </div>
    </>
  );
}

export default Navbar;
