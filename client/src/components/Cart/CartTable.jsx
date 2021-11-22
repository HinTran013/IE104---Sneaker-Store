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

                {CartItem.map((item) => {
                    return (
                        <tr>
                            <th>
                                <div className={style.mainInfo}>
                                    <img src={item.thumbnail} alt="" />
                                    <div className={style.nameProduct}>
                                        <p>{item.name}</p>
                                        <div className={style.propsProduct}>
                                            <p>{item.detailColor}</p>
                                            <p>{item.detailSize}</p>
                                        </div>
                                        <div className={style.propsProduct}>
                                            <p className={style.newTotal}>Total ({item.quantity}): {item.total}</p>
                                        </div>
                                    </div>
                                </div>
                            </th>
                            <th className={style.amount}>{item.price}</th>
                            <th className={style.quantity}>{item.quantity}</th>
                            <th className={style.amount}>{item.total}</th>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default CartTable;