import React, { useState, useEffect } from 'react'

import { useSelector } from 'react-redux'
import { selectCustomer } from '../../features/customerSlice'
import styleCartTable from "./CartTable.module.css"
import sneaker from "../../assets/images/ColoredSneaker.png"    //temp image
import { getCurrent } from '../../api/cartAPI'
import { Link } from 'react-router-dom'

import styleCartTotal from "./CartTotal.module.css"
import styleCartInfo from "./CartCustomerInfo.module.css"
import styleSection from "./CartSection.module.css"

import checked from "../../assets/icons/checked.png"
import emptycart from "../../assets/images/cart/emptycart.png"


const CartSection = () => {

    //CartTable
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


    //CartCustomerInfo
    useEffect(() => {
        if (customer) {
            getCartListDatabase();
        }
        else {
            getCartListLocal();
        }
    }, []);

    const customerInfo = useSelector(selectCustomer)

    const [customerName, setCustomerName] = useState('')
    const [customerEmail, setCustomerEmail] = useState('')
    const [customerAddress, setCustomerAddress] = useState('')
    const [customerPhone, setCustomerPhone] = useState('')

    useEffect(() => {
        if (customerInfo) {
            setCustomerName(customerInfo.name)
            setCustomerEmail(customerInfo.email)
            setCustomerAddress(customerInfo.address)
            setCustomerPhone(customerInfo.phone)
        }
    }, [customerInfo]);


    return (
        <>
            <div className={styleSection.emptyCart}>
                <img src={emptycart} alt="" />
                <p>There is not any product in the cart yet!</p>
                <div className={styleSection.btnEmpty}>
                    <Link to="/product">Back to Product Page</Link>
                </div>
            </div>

            <section className={styleSection.cartSection}>
                {/* CartTable */}
                <div className={styleSection.cartTable}>
                    <table className={styleCartTable.cartTable}>
                        <thead>
                            <tr className={styleCartTable.trHead}>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Discount</th>
                                <th>Total</th>
                            </tr>
                        </thead>

                        <tbody className={styleCartTable.trProduct}>
                            {cartList.map((item) => {
                                return (
                                    <tr>
                                        <th>
                                            <div className={styleCartTable.mainInfo}>
                                                <img src={sneaker} alt="" />
                                                <div className={styleCartTable.nameProduct}>
                                                    <p>{item.name}</p>
                                                    <div className={styleCartTable.propsProduct}>
                                                        <p>{item.color}</p>
                                                        <p>{item.size}</p>
                                                    </div>
                                                    <div className={styleCartTable.propsProduct}>
                                                        <p className={styleCartTable.newTotal}>Total: {item.salePercent} VND</p>
                                                    </div>

                                                </div>
                                            </div>
                                        </th>
                                        <th className={styleCartTable.amount}>{item.price}</th>
                                        <th className={styleCartTable.discount}>{item.salePercent}</th>
                                        <th className={styleCartTable.amount}>{item.price - (item.price * item.salePercent * 0.01)}</th>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>


                <div className={styleSection.cartCalculate}>
                    {/* CartCustomerInfo */}
                    <div className={styleCartInfo.cartInfoDiv}>
                        <h1 className={styleCartInfo.titleInfo}>Customer Information</h1>

                        <div className={styleCartInfo.divSectionCal}>
                            <div className={styleCartInfo.divInput}>
                                <div className={styleCartInfo.divInfo}>
                                    <input
                                        className={styleCartInfo.input}
                                        type="text"
                                        placeholder="Name"
                                        value={customerName}
                                        onChange={(e) => setCustomerName(e.target.value)}
                                    />
                                </div>
                                <div className={styleCartInfo.divInfo}>
                                    <input
                                        className={styleCartInfo.input}
                                        type="text"
                                        placeholder="Email"
                                        value={customerEmail}
                                        onChange={(e) => setCustomerEmail(e.target.value)}
                                    />
                                </div>
                                <div className={styleCartInfo.divInfo}>
                                    <input
                                        className={styleCartInfo.input}
                                        type="text"
                                        placeholder="Address"
                                        value={customerAddress}
                                        onChange={(e) => setCustomerAddress(e.target.value)}
                                    />
                                </div>
                                <div className={styleCartInfo.divInfo}>
                                    <input
                                        className={styleCartInfo.input}
                                        type="text"
                                        placeholder="Phone Number"
                                        value={customerPhone}
                                        onChange={(e) => setCustomerPhone(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CartTotal */}
                    <div className={styleCartTotal.cartTotalDiv}>
                        <h1 className={styleCartTotal.titleTotal}>Cart Totals</h1>

                        <div className={styleCartTotal.divTotal}>
                            <div className={styleCartTotal.totals}>
                                <p>Subtotals: </p>
                                <p>200.000 VND</p>
                            </div>
                            <div className={styleCartTotal.totals}>
                                <p>Totals: </p>
                                <p>200.000 VND</p>
                            </div>
                            <div className={styleCartTotal.checked}>
                                <img src={checked} alt="" />
                                <p>Shipping and taxes calculated at checkout</p>
                            </div>
                            <div className={styleCartTotal.divBtn}>
                                <Link to="">Procced to check out</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default CartSection;