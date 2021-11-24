import React from 'react'
import style from './SuggestProducts.module.css'
import ProductItem from '../ProductItem/ProductItem'
import { OneProduct } from './ProductData'

function SuggestProducts() {
     return (
          <div className={style.container}>
               <h2 className={style.text}>Suggested Products</h2>
               <div className={style.productContainer}>
                    <ProductItem
                         data={OneProduct}
                    />
                    <ProductItem
                         data={OneProduct}
                    />
                    <ProductItem
                         data={OneProduct}
                    />
                    <ProductItem
                         data={OneProduct}
                    />
                    <ProductItem
                         data={OneProduct}
                    />
                    <ProductItem
                         data={OneProduct}
                    />
                    <ProductItem
                         data={OneProduct}
                    />
               </div>
          </div>
     )
}

export default SuggestProducts