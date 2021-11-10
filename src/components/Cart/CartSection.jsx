import React, { Component } from 'react'

import style from "./CartSection.module.css"
import CartTable from './CartTable';
import CartTotal from './CartTotal';
import CartShipping from './CartShipping';

const CartSection = () => {
    return (
        <section className={style.cartSection}>
            <div className={style.cartTable}>
                <CartTable />
            </div>
            <div className={style.cartCalculate }>
                <CartTotal />
                <CartShipping />
            </div>   
        </section>
    )
};

export default CartSection;