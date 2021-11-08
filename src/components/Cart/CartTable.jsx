import React, { Component } from 'react'

import style from "./CartTable.module.css"
import sneaker from "../../assets/images/ColoredSneaker.png"
import { CartItem } from "./CartTableData.js"

const CartTable = () =>
{
    return (
        <table className={style.cartTable}>
            <thead>
                <tr className={style.trHead}>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
            </thead>

            <tbody className={style.trProduct}>
                
                {CartItem.map((item) => 
                {
                    return (
                        <tr>
                            <th>
                                <img src={sneaker} alt="" />
                                <div className={style.nameProduct}>
                                    <p>Sneaker</p>
                                    <p>Detail</p>
                                    <p>Detail</p>
                                </div>
                            </th>
                            <th className={style.amount}>244</th>
                            <th className={style.quantity}>244</th>
                            <th className={style.amount}>244</th>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default CartTable;