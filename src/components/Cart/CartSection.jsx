import React, { Component } from 'react'

import style from "./CartSection.module.css"
import CartTable from './CartTable';
import CartTotal from './CartTotal';

const CartSection = () => {
    return (
        <div className={style.cartContainer }>
            <section className={style.cartSection}>
                <CartTable />
                <CartTotal />
            </section>
        </div>
    )
};

export default CartSection;