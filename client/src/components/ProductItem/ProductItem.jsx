import React from 'react'
import style from './ProductItem.module.css'
import Nike1 from '../../assets/images/sneaker-transparent/nike-1.png'     //temp image

function ProductItem({ data }) {

     return (
          <a href={`/product/${data._id}`} className={style.card}>
               <div className={style.imgBox}>
                    <img src={Nike1} />
               </div>

               <div className={style.popup}>
                    <div className={`${style.btn} ${style.btn1}`}>
                         <i className="fas fa-ellipsis-h"></i>
                    </div>
                    <div className={`${style.btn} ${style.btn2}`}>
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
                    <h2 className={style.price}>{`$${data.price}`}</h2>
               </div>
          </a>
     )
}

export default ProductItem