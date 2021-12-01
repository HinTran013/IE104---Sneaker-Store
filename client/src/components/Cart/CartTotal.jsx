import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import style from "./CartTotal.module.css"
import checked from "../../assets/icons/checked.png"

const CartTotal = () =>
{
    return (
        <div className={style.cartTotalDiv }>
            <h1 className={style.titleTotal}>Cart Totals</h1>

            <div className={style.divTotal}>
                <div className={style.totals }>
                    <p>Subtotals: </p>
                    <p>200.000 VND</p>
                </div>
                <div className={style.totals }>
                    <p>Totals: </p>
                    <p>200.000 VND</p>
                </div>
                <div className={style.checked }>
                    <img src={checked} alt="" />
                    <p>Shipping and taxes calculated at checkout</p>
                </div>
                <div className={style.divBtn }>
                    <Link to="">Procced to check out</Link>
                </div>
            </div>
        </div>
    );
}

export default CartTotal;