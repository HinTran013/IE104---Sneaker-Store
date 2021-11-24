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
            // exist current cart in database
            if (res) {
                setCartList(res.products);
            }
            else {
                // TODO: HANDLE GET CART LIST EMPTY HERE
                console.log('Empty cart!')

            }
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