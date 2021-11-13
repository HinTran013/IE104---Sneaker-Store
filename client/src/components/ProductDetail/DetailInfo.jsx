import React, { useState, useEffect } from 'react'
import { OneProduct } from './ProductData'        //temp imgs
import style from './DetailInfo.module.css'
import { getOneProduct } from '../../api/productAPI'

function DetailInfo({ id }) {
     const [color, setColor] = useState(0)
     const [size, setSize] = useState()
     const [product, setProduct] = useState({ size: [] })

     const changeColor = (index) => {
          setColor(index)
     }

     const changeSize = (index) => {
          setSize(index)
     }

     useEffect(() => {
          getOneProduct(id)
               .then(res => {
                    setProduct(res)
                    console.log(res)
               })
     }, [])

     return (
          <div className={style.container}>
               <h4 className={style.path}>Product/Nike Shoes</h4>

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
                                                  className={index === size ? `${style.sizeItem} ${style.sizeActive}` : style.sizeItem}
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

                              <button className={style.btnAddToCart}>Add to cart</button>
                              <button className={style.btnFavourite}>Favourite</button>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default DetailInfo