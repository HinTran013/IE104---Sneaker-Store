import React from "react";
import { Link } from 'react-router-dom'
import Style from "../pageStyle/ErrorPage.module.css"
import Checkout from "../components/Checkout/Checkout";
function Page404() {
    return (
        <>
        <div className={Style.contentPage}>
            <div>
                <img className={Style.image} src='//cdn.shopify.com/s/files/1/0145/5613/5478/files/404.png?v=1569035759'/>
            </div>
            <h3 className={Style.errorTitle}>We are sorry, the page you’ve requested is not available</h3>
            <Link className={Style.buttonBack} to='/'>BACK TO HOME</Link>
        </div>
        <Checkout />
        </>
    )
}

export default Page404