import React from 'react'
import style from './SuggestProducts.module.css'
import ProductItem from '../ProductItem/ProductItem'
import { OneProduct } from './ProductData'

function SuggestProducts() {
     return (
          <>
               <h2 className={style.text}>Suggested Products</h2>
               <div className={style.container}>
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
          </>
     )
}

export default SuggestProducts