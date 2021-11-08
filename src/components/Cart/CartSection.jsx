import React, { Component } from 'react'

import style from "./CartSection.module.css"
import CartTable from './CartTable';

const CartSection = () => {
    return (
        <section>
            <CartTable />
        </section>
    )
};

export default CartSection;