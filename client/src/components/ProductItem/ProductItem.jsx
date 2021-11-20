import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import style from './ProductItem.module.css'
import Nike1 from '../../assets/images/sneaker-transparent/nike-1.png'     //temp image
import { selectCustomer } from '../../features/customerSlice'
import { createCart, addToCart } from '../../api/cartAPI'

function ProductItem({ data }) {

     const customer = useSelector(selectCustomer)      //get current logged in customer

     const [sizeChoose , setSizeChoose] = useState('');

     const handleSizeChange = (size) => {
          setSizeChoose(size)
     }
     
     const handleAddToCart = () => {
          if (sizeChoose === '') {
               alert('Please choose size');
               return;
          }

          if (customer) {
               addToCartDatabase()
          }
          else {
               addToCartLocal()
          }
     }

     const addToCartLocal = () => {
          const sessionStorage = window.sessionStorage
          const cart = JSON.parse(sessionStorage.getItem('cart')) || []
          sessionStorage.setItem('cart', JSON.stringify([...cart, { 
               id: data._id, 
               size: sizeChoose, 
               name: data.name, 
               brand: data.brand, 
               color: data.color,
               price: data.price }
          ]))
     }

     const addToCartDatabase = () => {
          addToCart(
               customer.id,
               data._id,
               data.name,
               data.brand,
               data.price,
               sizeChoose,
               data.color
          )
          .then(res => {
               console.log(res)
               // TODO: HANDLE UPDATE UI WHEN ADD TO CART SUCCESSFULLY HERE
               alert('Added to cart successfully!')

          })
          .catch(err => {
               console.log(err)
               // TODO: HANDLE UPDATE UI WHEN ADD TO CART FAIL HERE
               alert('Add to cart fail!')

          })
     }


     return (
          <Link to={`/product/${data._id}`} className={style.card} >
               <div className={style.imgBox}>
                    <img src={Nike1} />
               </div>

               <div className={style.popup}>
                    <div className={`${style.btn} ${style.btn1}`}>
                         <i className="fas fa-ellipsis-h"></i>
                    </div>
                    <div className={`${style.btn} ${style.btn2}`} onClick={ e => {
                         e.preventDefault()
                         e.stopPropagation()
                         handleAddToCart()
                    }}>
                         <i className="fal fa-shopping-cart"></i>
                    </div>
                    <div className={`${style.btn} ${style.btn3}`}>
                         <i className="far fa-heart"></i>
                    </div>
               </div>

               <div className={style.content}>
                    <h2 className={style.name}>{data.name}</h2>
                    <h4 className={style.rating}>
                         <i className="fas fa-star"></i>
                         <i className="fas fa-star"></i>
                         <i className="fas fa-star"></i>
                         <i className="fas fa-star"></i>
                         <i className="far fa-star"></i>
                    </h4>
                    <p className={style.shortDesc}>{data.shortDescription}</p>
                    <div className={style.sizeContainer}>
                         {
                              data.size.map(size => {
                                   return <p
                                        key={size} 
                                        className={size === sizeChoose ? `${style.sizeItem} ${style.sizeChoose}` : style.sizeItem}
                                        onClick={(e) => {
                                             e.preventDefault()
                                             e.stopPropagation()
                                             handleSizeChange(size)
                                        }}>
                                             {size}
                                        </p>
                              })
                         }
                    </div>
                    <h2 className={style.price}>{`$${data.price}`}</h2>
               </div>
          </Link>
     )
}

export default ProductItem