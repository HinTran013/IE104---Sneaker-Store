import React from 'react'
import style from './ProductItem.module.css'

function ProductItem({
     data: {
          src: [{ img, color }],
          name,
          rating,
          shortDescription,
          price
     }
}) {

     return (
          <div className={style.card}>
               <div className={style.imgBox}>
                    <img src={img} />
               </div>

               <div className={style.popup}>
                    <div className={`${style.btn} ${style.btn1}`}>
                         <i class="fas fa-ellipsis-h"></i>
                    </div>
                    <div className={`${style.btn} ${style.btn2}`}>
                         <i class="fal fa-shopping-cart"></i>
                    </div>
                    <div className={`${style.btn} ${style.btn3}`}>
                         <i class="far fa-heart"></i>
                    </div>
               </div>

               <div className={style.content}>
                    <h2 className={style.name}>{name}</h2>
                    <h4 className={style.rating}>
                         <i class="fas fa-star"></i>
                         <i class="fas fa-star"></i>
                         <i class="fas fa-star"></i>
                         <i class="fas fa-star"></i>
                         <i class="far fa-star"></i>
                    </h4>
                    <p className={style.shortDesc}>{shortDescription}</p>
                    <h2 className={style.price}>{`$${price}`}</h2>
               </div>
          </div>
     )
}

export default ProductItem