import React from 'react'

import { BlogInfo } from './OurBlogData'
import cardBlogStyle from "./CardBlog.module.css"
//import ourBlogStyle from "../OurBlog/OurBlogStyle.module.css"

const CardBlog = () =>
{
    return (
        <div className={cardBlogStyle.divContainer}>

            {BlogInfo.map((item, index) => {
                return (
                    <div className={cardBlogStyle.cardBlog} key={index}>
                        <a href={item.path}><img src={item.thumbnail} alt="" /></a>
                        <p><time>on {item.timePost}</time></p>
                        <article><a href="">{item.titlePost}</a></article>
                        <p>{item.description}</p>
                    </div>
                );
            })}

        </div>
    )
}

export default CardBlog