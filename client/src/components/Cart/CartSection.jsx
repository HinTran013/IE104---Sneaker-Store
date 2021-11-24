import React, { Component } from 'react'

import style from "./CartSection.module.css"
import CartTable from './CartTable';
import CartTotal from './CartTotal';
import CartCustomerInfo from './CartCustomerInfo';

const CartSection = () => {
    return (
        <section className={style.cartSection}>
            <div className={style.cartTable}>
                <CartTable />
            </div>
            <div className={style.cartCalculate }>
                <CartCustomerInfo />
                <CartTotal />
            </div>   
        </section>
    )
};

export default CartSection;