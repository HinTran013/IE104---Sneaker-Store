import React, { Component } from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import "./footerStyle.css"

import instagram from "../../images/instagram.png";
import twitter from "../../images/twitter.png";
import facebook from "../../images/facebook.png";

export class Footer extends Component
{
    render()
    {
        return (
            <footer className="container">
                <div className="guideLinks row">
                    <div className="colUpper col-3">
                        <ul>
                            <li><a href="#">FIND A STORE</a></li>
                            <li><a href="#">BECOME A MEMEBER</a></li>
                            <li><a href="#">SIGNUP FOR EMAIL</a></li>
                            <li><a href="#">SEND US FEEDBACK</a></li>
                        </ul>
                    </div>
                    <div className="colInfo col-9">
                        <div className="colHeader row">
                            <div className="col">GET HELP</div>
                            <div className="col">ABOUT US</div>
                            <div className="col">POLICY</div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <ul>
                                    <li><a href="#">Order status</a></li>
                                    <li><a href="#">Delivery</a></li>
                                    <li><a href="#">Return</a></li>
                                    <li><a href="#">Payment options</a></li>
                                    <li><a href="#">Contact us</a></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li><a href="#">News</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Investors</a></li>
                                    <li><a href="#">Sustainability</a></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li><a href="#">Return policy</a></li>
                                    <li><a href="#">Check orders</a></li>
                                    <li><a href="#">Payment policy</a></li>
                                    <li><a href="#">Ordering guide</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="trademarks row">
                    <div className="row">
                        <ul className="icon">
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
                    <div className="row">
                        &copy; 2021 BRAND, Inc. All Rights Reserved
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
