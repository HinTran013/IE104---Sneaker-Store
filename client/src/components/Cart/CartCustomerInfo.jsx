import React, { Component, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectCustomer } from '../../features/customerSlice'
import styleCartInfo from "./CartCustomerInfo.module.css"

const CartCustomerInfo = () =>
{
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
    );
}

export default CartCustomerInfo;