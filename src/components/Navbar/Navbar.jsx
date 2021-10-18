import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {

     return (
          <>
               <div className='header__container'>
                    <h3 className='header__logo'>Logo</h3>
                    <ul className='header__navbar'>
                         <li className='header__navbar-item'>
                              <Link to='/'>
                                   <p>Home</p>
                              </Link>
                         </li>
                         <li className='header__navbar-item'>
                              <Link to='/product'>
                                   <p>Product</p>
                              </Link>
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
                    <button className='header__btn'>Sign up</button>
               </div>
          </>
     )
}

export default Navbar