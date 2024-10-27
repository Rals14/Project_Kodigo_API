import React from "react"
import "./Header.css"
import logo from "../../img/logo-blanco.webp"

export const Header = () => {
    return (
        <header id="Container">

        {/* Container img */}

        <div id="Container-logo">
        <img id="logo" src={logo} alt="Logo Kodigo" /> 
        </div>

         {/* Container links */}


        <nav id="Container-tags">

        <ul>

        <li><a href="#">Bootcamps</a></li>
        <li><a href="#">AIC</a></li>
        <li><a href="#">Alianzas</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Sign In</a></li>

        </ul>

        </nav>

        <a id="Call-us" href="#">Call Us</a>

        </header>
    );
}

