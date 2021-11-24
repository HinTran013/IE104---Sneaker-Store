import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { OneProduct } from './ProductData'        //temp imgs
import style from './DetailInfo.module.css'
import { getOneProduct } from '../../api/productAPI'
import { selectCustomer } from '../../features/customerSlice'
import { createCart, addToCart, getCurrent } from '../../api/cartAPI'
import { getFavourites, createFavouriteList, addFavourite } from '../../api/favouriteAPI'

function DetailInfo({ id }) {

     const customer = useSelector(selectCustomer)      //get current logged in customer

     const [color, setColor] = useState(0)
     const [sizeChoose, setSizeChoose] = useState('')
     const [product, setProduct] = useState({ size: [] })

     const changeColor = (index) => {
          setColor(index)
     }

     const changeSize = (index) => {
          setSizeChoose(index)
     }

     const handleAddToCart = () => {
          if (sizeChoose === '') {
               alert('Please choose size');
               return;
          }

          if (customer) {
               getCurrent(customer.id)
                    .then(res => {
                         // exist current cart in database
                         if (res) {
                              addToCartDatabase()
                         }
                         else {
                              createCart(customer.id).then(res => {
                                   addToCartDatabase()
                              })
                         }
                    })
                    .catch(err => {
                         // TODO: HANDLE GET ADD PRODUCT TO DATABASE FAILED HERE
                         console.log(err)

                    })
          }
          else {
               addToCartLocal()
          }
     }

     const addToCartLocal = () => {
          const sessionStorage = window.sessionStorage
          const cart = JSON.parse(sessionStorage.getItem('cart')) || []
          sessionStorage.setItem('cart', JSON.stringify([...cart, {
               id: product._id,
               size: product.size[sizeChoose],
               name: product.name,
               brand: product.brand,
               color: product.color,
               price: product.price
          }
          ]))
     }

     const addToCartDatabase = () => {
          addToCart(
               customer.id,
               product._id,
               product.name,
               product.brand,
               product.price,
               product.size[sizeChoose],
               product.color
          )
          .then(res => {
               // TODO: HANDLE UPDATE UI WHEN ADD TO CART SUCCESSFULLY HERE
               alert('Added to cart successfully!')

          })
          .catch(err => {
               console.log(err)
               // TODO: HANDLE UPDATE UI WHEN ADD TO CART FAIL HERE
               alert('Add to cart fail!')

          })
     }

     const handleAddToFavorite = () => {
          if (customer) {
               getFavourites(customer.id)
                    .then(res => {
                         // exist current favourite list in database
                         if (res.length > 0) {
                              addFavourite(customer.id, product._id).then(res => {
                                   // TODO: HANDLE UPDATE UI WHEN ADD FAVOURITE SUCCESSFULLY HERE

                              })
                         }
                         else {
                              createFavouriteList(customer.id)
                                   .then(res => {
                                        addFavourite(customer.id, product._id)
                                        // TODO: HANDLE UPDATE UI WHEN ADD FAVOURITE SUCCESSFULLY HERE

                                   })
                         }
                    })
          }
          else {
               // TODO: HANDLE NOTIFY WHEN USER NOT LOGGED IN HERE
               console.log('Please login to use this feature')
          }
     }

     useEffect(() => {
          getOneProduct(id)
               .then(res => {
                    setProduct(res)
               })
     }, [])

     return (
          <div className={style.container}>
               <h4 className={style.path}>Product / {product.name}</h4>

               <div className={style.infoContainer}>
                    <div className={style.imgWrapper}>
                         <div className={style.mainImg}>
                              <img src={OneProduct.src[color].img} />
                         </div>

                         <div className={style.colorThumb}>
                              {
                                   OneProduct.src.map((item, index) => (
                                        <div
                                             className={index === color ? `${style.colorItem} ${style.colorActive}` : style.colorItem}
                                             key={index}
                                             onClick={() =>
                                                  changeColor(index)
                                             }
                                        >
                                             <img src={item.img} />
                                        </div>
                                   ))
                              }
                         </div>
                    </div>
               
                    <div className={style.divide}></div>

                    <div className={style.infoWrapper}>
                         <div className={style.info}>
                              <h2 className={style.name}>{product.name}</h2>
                              <h4 className={style.brand}>{product.brand}</h4>
                              <h4 className={style.rating}>Rating: {product.rating}</h4>
                              <p className={style.price}>$ {product.price}</p>
                              <p className={style.description}>{product.description}</p>

                              
                              <h4 className={style.sizeText}>Size</h4>
                              <div className={style.sizeContainer}>
                                   {
                                        product.size.map((item, index) => (
                                             <div 
                                                  className={index === sizeChoose ? `${style.sizeItem} ${style.sizeActive}` : style.sizeItem}
                                                  key={index}
                                                  onClick={() =>
                                                       changeSize(index)
                                                  }
                                             >
                                                  {item}
                                             </div>
                                        ))
                                   }
                              </div>

                              <button className={style.btnAddToCart} onClick={handleAddToCart}>Add to cart</button>
                              <button className={style.btnFavourite} onClick={handleAddToFavorite}>Favourite</button>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default DetailInfo