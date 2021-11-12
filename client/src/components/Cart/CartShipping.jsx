import React, { Component } from 'react'

import style from "./CartShipping.module.css"

const CartShipping = () =>
{
    return (
        <div className={style.cartShippingDiv}>
            <h1 className={style.titleShipping}>Calculate Shipping</h1>

            <div className={style.divSectionCal}>
                <div className={style.divInput}>
                    <div className={style.divShipping}>
                        <input className={style.input} type="text" placeholder="City" />
                    </div>
                    <div className={style.divShipping}>
                        <input className={style.input} type="text" placeholder="District" />
                    </div>
                    <div className={style.divShipping}>
                        <input className={style.input} type="text" placeholder="Postal Code" />
                    </div>
                </div>

                <div className={style.divCalculate}>
                    <div className={style.divTotalShip}>
                        <p>Shipping cost: </p>
                        <p>200.000 VND</p>
                    </div>
                    <a href="">Calculate Shipping</a>
                </div>
            </div>
        </div>
    );
}

export default CartShipping;