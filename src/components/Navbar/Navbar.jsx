import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Brands } from './BrandData'
import './Navbar.css'
import './NavbarResponsive.css'

function Navbar() {
     const [navbar, setNavbar] = useState(false)
     const [navbarMobile, setNavbarMobile] = useState(false)

     // change navbar background when scroll
     const changeNavbar = () => {
          if (window.scrollY >= 65) {
               setNavbar(true)
          }
          else {
               setNavbar(false)
          }
     }

     window.addEventListener('scroll', changeNavbar)

     return (
          <>
               <div className={navbar ? 'header__container navbar-on-scroll' : 'header__container'}>
                    <div
                         className='mobile-menu-icon'
                         onClick={() => setNavbarMobile(!navbarMobile)}
                    >
                         {navbarMobile ? (<i className="fas fa-times"></i>) : <i className="fas fa-bars"></i>}
                    </div>

                    <h3 className='header__logo'>Logo</h3>

                    <ul className={navbarMobile ? 'header__navbar-mobile' : 'header__navbar'}>
                         <li className='header__navbar-item'>
                              <Link to='/'>
                                   <p>Home</p>
                              </Link>
                         </li>

                         <li className='header__navbar-item' id='navbar__product'>
                              <Link to='/product'>
                                   <p>Product</p>
                              </Link>
                              <i className="fas fa-chevron-right navbar__product-icon"></i>

                              <div className='navbar__product-dropdown'>
                                   {Brands.map((item, index) => {
                                        return (
                                             <div className='navbar__product-container' key={index}>
                                                  <Link className='navbar__product-item' to={item.path}>
                                                       <img className='navbar__product-item__img' src={item.logo} />
                                                       <h4>{item.title}</h4>
                                                  </Link>
                                             </div>
                                        );
                                   })}
                              </div>
                         </li>

                         <li className='header__navbar-item'>
                              <Link to='/about-us'>
                                   <p>About us</p>
                              </Link>
                         </li>

                         <li className='header__navbar-item'>
                              <Link to='/blog'>
                                   <p>Blog</p>
                              </Link>
                         </li>
                    </ul>

                    <div className='header__btn-container'>
                         <div className={navbar ? 'header__search-container search-on-scroll' : 'header__search-container'} >
                              <input className='header__input-search' type='text' placeholder='Search something...' />
                              <i className='far fa-search header__btn-search'></i>
                         </div>
                         <i className='far fa-shopping-cart'></i>
                         <i className='far fa-user'></i>
                    </div>
               </div>
          </>
     )
}

export default Navbar