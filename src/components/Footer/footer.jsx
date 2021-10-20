
import React, { Component } from 'react'
//import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
//import "./footerStyle.css"
import footerCSS from "./footerStyle.module.css"


import instagram from "../../assets/images/footerSrc/instagram.png";
import twitter from "../../assets/images/footerSrc/twitter.png";
import facebook from "../../assets/images/footerSrc/facebook.png";

export class Footer extends Component
{
    render()
    {
        return (
            <footer className={footerCSS.container}>
                <div className={`${footerCSS.colInfo}`}>
                    <div className={`${footerCSS.colUpper}`}>
                        <ul>
                            <li><a href="#">FIND A STORE</a></li>
                            <li><a href="#">BECOME A MEMBER</a></li>
                            <li><a href="#">SIGNUP FOR EMAIL</a></li>
                            <li><a href="#">SEND US FEEDBACK</a></li>
                        </ul>
                    </div>

                    <div className={footerCSS.col}>
                        <ul>
                            <li><a href="#"></a>GET HELP</li>
                            <li><a href="#">Order status</a></li>
                            <li><a href="#">Delivery</a></li>
                            <li><a href="#">Return</a></li>
                            <li><a href="#">Payment options</a></li>
                            <li><a href="#">Contact us</a></li>
                        </ul>
                    </div>
                    <div className={footerCSS.col}>
                        <ul>
                            <li><a href="#"></a>ABOUT US</li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Investors</a></li>
                            <li><a href="#">Sustainability</a></li>
                        </ul>
                    </div>
                    <div className={footerCSS.col}>
                        <ul>
                            <li><a href="#"></a>POLICY</li>
                            <li><a href="#">Return policy</a></li>
                            <li><a href="#">Check orders</a></li>
                            <li><a href="#">Payment policy</a></li>
                            <li><a href="#">Ordering guide</a></li>
                        </ul>
                    </div>
                </div>

                <div className={`${footerCSS.trademarks}`}>
                    <div className={footerCSS.row}>
                        <ul className={footerCSS.icon}>
                            <li>
                                <a href="#">
                                    <img src={instagram} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={facebook} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={twitter} alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={footerCSS.row}>
                        &copy; 2021 BRAND, Inc. All Rights Reserved
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
