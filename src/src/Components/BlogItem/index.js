import React from "react";
import './index.css'

const DisplayBlog=(props)=>{
    const {details}=props
    const {id,title,imageUrl,avatarUrl,author,topic}=details
    console.log(details)
    return (
        <div className="main-container">
            <div className="blog-container">
            <div className="image-container">
                <img className="image" src={imageUrl}/>
            </div>
            <div className="data-container">
                <p >{title}</p>
                <h1 id="head">{topic}</h1>
                <div  className="image-container">
                    <img className="image" src={avatarUrl}/>
                    <p id="p">{author}</p>
                </div>
            </div>

        </div>
        </div>
        

    )
}

export default DisplayBlog;