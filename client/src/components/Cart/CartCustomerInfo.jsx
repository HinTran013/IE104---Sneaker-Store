import React, { Component, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectCustomer } from '../../features/customerSlice'
import style from "./CartCustomerInfo.module.css"

const CartCustomerInfo = () =>
{
    const customer = useSelector(selectCustomer)

    const [customerName, setCustomerName] = useState('')
    const [customerEmail, setCustomerEmail] = useState('')
    const [customerAddress, setCustomerAddress] = useState('')
    const [customerPhone, setCustomerPhone] = useState('')

    useEffect(() => {
        if (customer) {
            setCustomerName(customer.name)
            setCustomerEmail(customer.email)
            setCustomerAddress(customer.address)
            setCustomerPhone(customer.phone)
        }
    }, [customer]);

    return (
        <div className={style.cartInfoDiv}>
            <h1 className={style.titleInfo}>Customer Information</h1>

            <div className={style.divSectionCal}>
                <div className={style.divInput}>
                    <div className={style.divInfo}>
                        <input 
                            className={style.input} 
                            type="text" 
                            placeholder="Name"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                        />
                    </div>
                    <div className={style.divInfo}>
                        <input
                            className={style.input}
                            type="text" 
                            placeholder="Email"
                            value={customerEmail}
                            onChange={(e) => setCustomerEmail(e.target.value)}
                        />
                    </div>
                    <div className={style.divInfo}>
                        <input 
                            className={style.input} 
                            type="text" 
                            placeholder="Address" 
                            value={customerAddress}
                            onChange={(e) => setCustomerAddress(e.target.value)}
                        />
                    </div>
                    <div className={style.divInfo}>
                        <input 
                            className={style.input} 
                            type="text" 
                            placeholder="Phone Number" 
                            value={customerPhone}
                            onChange={(e) => setCustomerPhone(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartCustomerInfo;