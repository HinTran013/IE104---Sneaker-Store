import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectCustomer } from '../../features/customerSlice'
import style from "./CartTable.module.css"
import sneaker from "../../assets/images/ColoredSneaker.png"    //temp image
import { CartItem } from "./CartTableData.js"
import { getCurrent } from '../../api/cartAPI'

const CartTable = () => {
    const customer = useSelector(selectCustomer)      //get current logged in customer

    const [cartList, setCartList] = useState([]);

    const getCartListLocal = () => {
        const sessionStorage = window.sessionStorage;
        const cart = JSON.parse(sessionStorage.getItem('cart'));
        setCartList(cart);
    }

    const getCartListDatabase = () => {
        getCurrent(customer.id).then(res => {
            setCartList(res.products);
        })
    }

    useEffect(() => {
        if (customer) {
            getCartListDatabase();
        }
        else {
            getCartListLocal();
        }
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