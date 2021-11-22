import React, { Component } from 'react'

import style from "./CartCustomerInfo.module.css"

const CartCustomerInfo = () =>
{
    return (
        <div className={style.cartInfoDiv}>
            <h1 className={style.titleInfo}>Customer Information</h1>

            <div className={style.divSectionCal}>
                <div className={style.divInput}>
                    <div className={style.divInfo}>
                        <input className={style.input} type="text" placeholder="Name" />
                    </div>
                    <div className={style.divInfo}>
                        <input className={style.input} type="text" placeholder="Email" />
                    </div>
                    <div className={style.divInfo}>
                        <input className={style.input} type="text" placeholder="Address" />
                    </div>
                    <div className={style.divInfo}>
                        <input className={style.input} type="text" placeholder="Phone Number" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartCustomerInfo;