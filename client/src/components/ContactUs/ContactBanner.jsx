import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import style from "./ContactBanner.module.css"

const ContactBanner = () =>
{
    return (
        <div className={style.contactBanner}>
            <h1 className={style.contactTitle}>CONTACT US</h1>
            <h2 className={style.contactPath}><Link to="/">HOME</Link> / <Link to="/contact">CONTACT</Link></h2>
        </div>
    )
}

export default ContactBanner;