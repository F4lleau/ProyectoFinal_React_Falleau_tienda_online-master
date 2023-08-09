import React from "react";
import "./Header.css";
import img from "./banner.jpg"

const Header = () =>{
    return (
        <div className="Header">
            <img src={img} alt= "banner" width={1000}height={400}/>
        </div>
    );
};

Header.defaultProps={
    title: "Ecommerce final",
};

export default Header;
