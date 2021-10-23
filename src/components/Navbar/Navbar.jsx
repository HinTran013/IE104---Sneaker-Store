import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Brands } from './BrandData'
import ArrowIcon from '../../assets/icons/arrow-down.svg'
import './Navbar.css'

function Navbar() {
     const [navbar, setNavbar] = useState(false)

     // change navbar background when scroll
     const changeNavbar = () => {
          if (window.scrollY >= 80) {
               setNavbar(true)
          }
          else {
               setNavbar(false)
          }
     }

     window.addEventListener('scroll', changeNavbar)

     return (
          <>
               <div className={navbar ? 'header__container on-scroll' : 'header__container'}>
                    <h3 className='header__logo'>Logo</h3>

                    <ul className='header__navbar'>
                         <li className='header__navbar-item'>
                              <Link to='/'>
                                   <p>Home</p>
                              </Link>
                         </li>

                         <li className='header__navbar-item' id='navbar__product'>
                              <div className='header__navbar-product-container'>
                                   <Link to='/product'>
                                        <p>Product</p>
                                   </Link>
                                   <img className='header__navbar-product-icon' src={ArrowIcon} />
                              </div>

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
                         <button className='header__btn fill'>Login</button>
                         <button className='header__btn border'>Sign up</button>
                    </div>
               </div>
          </>
     )
}

export default Navbar