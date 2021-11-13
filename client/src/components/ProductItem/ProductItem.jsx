import React from 'react'
import style from './ProductItem.module.css'
import Nike1 from '../../assets/images/sneaker-transparent/nike-1.png'     //temp image

function ProductItem({ data }) {

     return (
          <div className={style.card}>
               <div className={style.imgBox}>
                    <img src={Nike1} />
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
                    <h2 className={style.name}>{data.name}</h2>
                    <h4 className={style.rating}>
                         <i class="fas fa-star"></i>
                         <i class="fas fa-star"></i>
                         <i class="fas fa-star"></i>
                         <i class="fas fa-star"></i>
                         <i class="far fa-star"></i>
                    </h4>
                    <p className={style.shortDesc}>{data.shortDescription}</p>
                    <h2 className={style.price}>{`$${data.price}`}</h2>
               </div>
          </div>
     )
}

export default ProductItem