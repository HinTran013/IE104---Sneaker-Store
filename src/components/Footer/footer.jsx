import React, { Component } from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import "./footerStyle.css"

export class Footer extends Component
{
    render()
    {
        return (
            <footer className="container">
                <div className="guideLinks row">
                    <div className="colUpper col-3">
                        <ul>
                            <li>FIND A STORE</li>
                            <li>BECOME A MEMEBER</li>
                            <li>SIGNUP FOR EMAIL</li>
                            <li>SEND US FEEDBACK</li>
                        </ul>
                    </div>
                    <div className="colInfo col-9">
                        <div className="container">
                            <div className="row">
                                <div className="col">GET HELP</div>
                                <div className="col">ABOUT US</div>
                                <div className="col">POLICY</div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <ul>
                                        <li>Order status</li>
                                        <li>Delivery</li>
                                        <li>Return</li>
                                        <li>Payment options</li>
                                        <li>Contact us</li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <ul>
                                        <li>News</li>
                                        <li>Careers</li>
                                        <li>Investors</li>
                                        <li>Sustainability</li>
                                    </ul>   
                                </div>
                                <div className="col">
                                    <ul>
                                        <li>Return policy</li>
                                        <li>Check orders</li>
                                        <li>Payment policy</li>
                                        <li>Ordering guide</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="trademarks row">
                    <div className="container">
                        <div className="row">
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                        </div>
                        <div className="row">
                            &copy; 2021 BRAND, Inc. All Rights Reserved
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
