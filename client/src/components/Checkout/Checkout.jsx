import React from "react";
import { Link } from "react-router-dom";
import style from "./Checkout.module.css"

import check from "../../assets/images/cart/check.png"

const Checkout = ({ setShowModal }) =>
{
    
    const closeClick = () =>
    {
        //setShowModal(prev => !prev);
        console.log("tessssssssssssssst")
    }


    return (
        <div className={style.modal}>
            <div className={style.checkoutContainer}>
                <div className={style.checkoutDiv}>
                    <img src={check} alt="" />
                    <h3>CHECKOUT SUCCEEDED!</h3>
                    <div className={style.btnDiv}>
                        <Link to="/" onClick={closeClick}>BACK TO HOME</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;