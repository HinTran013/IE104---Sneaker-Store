import React, { useState, useEffect } from 'react'
import style from "./CartTable.module.css"
import sneaker from "../../assets/images/ColoredSneaker.png"    //temp image
import { CartItem } from "./CartTableData.js"

const CartTable = () => {
    const [cartList, setCartList] = useState([]);

    useEffect(() => {
        // get cart list from session storage
        const sessionStorage = window.sessionStorage;
        const cart = JSON.parse(sessionStorage.getItem('cart'));
        setCartList(cart);
    }, []);

    return (
        <div>
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

                    {cartList.map((item) => {
                        return (
                            <tr>
                                <th>
                                    <img src={sneaker} alt="" />
                                    <div className={style.nameProduct}>
                                        <p>{item.name }</p>
                                        <p>{item.color }</p>
                                        <p>{item.size }</p>
                                    </div>
                                </th>
                                <th className={style.amount}>{item.price }</th>
                                <th className={style.quantity}>{item.quantity }</th>
                                <th className={style.amount}>{item.total }</th>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default CartTable;