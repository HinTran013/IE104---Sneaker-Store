import React, { Component } from 'react'

import style from "./ContactSection.module.css"
import ContactDetail from './ContactDetail'
import ContactForm from './ContactForm'

const ContactSection = () =>
{
    return (
        <section className={style.sectionContact}>
            <div className={style.divContact}>
                <h1>Contact Detail</h1>
                <ContactDetail />
            </div>

            <div className={style.divForm}>
                <h1>Get in touch with us</h1>
                <ContactForm />
            </div>
        </section>
    )
}

export default ContactSection;