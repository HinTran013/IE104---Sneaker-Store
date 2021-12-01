import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styleCartTotal from "./CartTotal.module.css"
import checked from "../../assets/icons/checked.png"

const CartTotal = () =>
{
    return (
        <div className={styleCartTotal.cartTotalDiv }>
            <h1 className={styleCartTotal.titleTotal}>Cart Totals</h1>

            <div className={styleCartTotal.divTotal}>
                <div className={styleCartTotal.totals }>
                    <p>Subtotals: </p>
                    <p>200.000 VND</p>
                </div>
                <div className={styleCartTotal.totals }>
                    <p>Totals: </p>
                    <p>200.000 VND</p>
                </div>
                <div className={styleCartTotal.checked }>
                    <img src={checked} alt="" />
                    <p>Shipping and taxes calculated at checkout</p>
                </div>
                <div className={styleCartTotal.divBtn }>
                    <Link to="">Procced to check out</Link>
                </div>
            </div>
        </div>
    );
}

export default CartTotal;