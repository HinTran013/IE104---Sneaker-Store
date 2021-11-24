import React, { Component } from 'react'

import style from "./ContactForm.module.css"

const ContactForm = () =>
{
    return (
        <section className={style.sectionForm}>
            <div className={style.inputInfo}>
                <input className={style.inputText}
                        placeholder="Your full name" />
                <input className={style.inputText}
                        placeholder="Your Email" />
            </div>

            <div className={style.inputSubject}>
                <input className={style.inputText}
                        placeholder="Subject" />
                
                <textarea className={style.inputText}
                        placeholder="Some messages"
                        rows="15"/>
            </div>

            <div className={style.divBtn }>
                    <a href="">Send us</a>
            </div>
        </section>
    )
}

export default ContactForm;