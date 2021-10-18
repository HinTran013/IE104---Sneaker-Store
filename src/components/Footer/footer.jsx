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
                    <div className="col">
                        <div className="container">
                            <div className="row">FIND A STORE</div>
                            <div className="row">BECOME A MEMEBER</div>
                            <div className="row">SIGNUP FOR EMAIL</div>
                            <div className="row">SEND US FEEDBACK</div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="container">
                            <div className="row">
                                <div className="col">GET HELP</div>
                                <div className="col">ABOUT US</div>
                                <div className="col">POLICY</div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="row">Order status</div>
                                    <div className="row">Delivery</div>
                                    <div className="row">Return</div>
                                    <div className="row">Payment options</div>
                                    <div className="row">Contact us</div>
                                </div>
                                <div className="col">
                                    <div className="row">News</div>
                                    <div className="row">Careers</div>
                                    <div className="row">Investor</div>
                                    <div className="row">Sustainability</div>    
                                </div>
                                <div className="col">
                                    <div className="row">Return policy</div>
                                    <div className="row">Check orders</div>
                                    <div className="row">Payment policy</div>
                                    <div className="row">Ordering guide</div>
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
