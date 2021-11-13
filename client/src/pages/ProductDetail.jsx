import React from "react";
import BackGroundImg from '../components/ProductDetail/BackGroundImg'
import DetailInfo from '../components/ProductDetail/DetailInfo'
import SuggestProducts from '../components/ProductDetail/SuggestProducts'


function ProductDetail(props) {

     const id = props.match.params.id;

     return (
          <>
               <BackGroundImg />

               <DetailInfo id={id}/>

               <SuggestProducts />
          </>
     )
}

export default ProductDetail