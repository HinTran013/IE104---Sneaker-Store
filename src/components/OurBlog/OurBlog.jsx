import React, { Component } from 'react'

import ourBlogStyle from "./OurBlogStyle.module.css"
import blog1 from "../../assets/images/ourBlogSrc/blog1.jpg"

export class OurBlog extends Component {
    render() {
        return (
            <section className={ourBlogStyle.sectionContainer}>
                <h1 className={ourBlogStyle.headerBlog}>Our Blog</h1>
                <div className={ourBlogStyle.divContainer}>
                    <div className={ourBlogStyle.cardBlog}>
                        <img src={blog1} alt="" />
                        <p>on <time>May 5th 2020</time></p>
                        <article>The Love At First Sight Boots</article>
                        <p>I knew I had to have these velvet Tibi boots
                            when I first saw them a few months back.</p>
                    </div>
                    <div>prototype</div>
                    <div>prototype</div>
                </div>
            </section>
        )
    }
}

export default OurBlog
