import React from "react";
import './index.css'
import BlogsList from "../BlogsList/index.js"

const Home=()=>{
    return(
        <div className="home">
            <BlogsList/>
        </div>
    );
}
export default Home;