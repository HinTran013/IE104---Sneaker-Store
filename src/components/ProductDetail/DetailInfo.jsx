import React, { useState } from 'react'
import { OneProduct } from './ProductData'
import style from './DetailInfo.module.css'

function DetailInfo() {
     const [color, setColor] = useState(0)
     const [size, setSize] = useState()

     const changeColor = (index) => {
          setColor(index)
     }

     const changeSize = (index) => {
          setSize(index)
     }

     return (
          <div className={style.container}>
               <h4 className={style.path}>Product/Nike Shoes</h4>

               <div className={style.infoContainer}>
                    <div className={style.mainImg}>
                         <img src={OneProduct.src[color].img} />
                    </div>

                    <div className={style.divide}></div>

                    <div className={style.infoWrapper}>
                         <div className={style.info}>
                              <h2 className={style.name}>{OneProduct.name}</h2>
                              <h4 className={style.rating}>Rating: {OneProduct.rating}</h4>
                              <p className={style.price}>$ {OneProduct.price}</p>
                              <p className={style.description}>{OneProduct.description}</p>

                              <h4 className={style.colorText}>Color</h4>
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

                              <h4 className={style.sizeText}>Size</h4>
                              <div className={style.sizeContainer}>
                                   {
                                        OneProduct.size.map((item, index) => (
                                             <div 
                                                  className={index === size ? `${style.sizeItem} ${style.sizeActive}` : style.sizeItem}
                                                  key={index}
                                                  onClick={() =>
                                                       setSize(index)
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