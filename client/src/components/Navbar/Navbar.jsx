import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { Brands } from "./BrandData";
import UserForm from "./UserForm";
import "./Navbar.css";
import "./NavbarResponsive.css";

Modal.setAppElement("#root");

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [navbarMobile, setNavbarMobile] = useState(false);
  const [inputSearch, setInputSearch] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // change navbar background when scroll
  const changeNavbar = () => {
    if (window.scrollY >= 65) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);

  return (
    <>
      <div
        className={
          navbar ? "header__container navbar-on-scroll" : "header__container"
        }
      >
        <div
          className="mobile-menu-icon"
          onClick={() => setNavbarMobile(!navbarMobile)}
        >
          {navbarMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </div>

        <h3 className="header__logo">Logo</h3>

        <ul
          className={navbarMobile ? "header__navbar-mobile" : "header__navbar"}
        >
          <li className="header__navbar-item">
            <Link to="/">
              <p>Home</p>
            </Link>
          </li>

          <li className="header__navbar-item" id="navbar__product">
            <Link to="/product">
              <p>Product</p>
            </Link>
            <i className="fas fa-chevron-right navbar__product-icon"></i>

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

        <div className="header__btn-container">
          <div
            className={
              navbar
                ? "header__search-container search-on-scroll"
                : "header__search-container"
            }
          >
            <i
              className="far fa-search header__btn-search"
              onClick={() => {
                setInputSearch(!inputSearch);
              }}
            ></i>
            <input
              className={
                inputSearch
                  ? "header__input-search appear"
                  : "header__input-search"
              }
              type="text"
              placeholder="Search something..."
            />
          </div>
          <i className="far fa-shopping-cart"></i>
          <div className="header__btn-login">
            <i className="far fa-user" onClick={() => setModalIsOpen(true)} />
            <Modal
              className="ModalReact__Content"
              overlayClassName="ModalReact__Overlay"
              isOpen={modalIsOpen}
              onRequestClose={() => setModalIsOpen(false)}
              // onAfterOpen={() => { document.body.style.overflow = 'hidden' }}
              // onAfterClose={() => { document.body.style.overflow = 'visible' }}
            >
              <UserForm></UserForm>
              <a
                href="javascript:void(0)"
                className="close_btn"
                onClick={() => setModalIsOpen(false)}
              >
                x
              </a>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
