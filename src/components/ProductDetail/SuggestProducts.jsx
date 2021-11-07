import React from 'react'
import style from './SuggestProducts.module.css'
import ProductItem from '../ProductItem/ProductItem'
import { OneProduct } from './ProductData'
import Nike from '../../assets/images/sneaker-transparent/nike-1.png'

function SuggestProducts() {
     return (
          // temporary, use for testing
          <div>
               <h1>SuggestProducts</h1>
               <div className={style.container}>
                    <ProductItem
                         data={OneProduct}
                    />
               </div>
          </div>
     )
}

export default SuggestProducts