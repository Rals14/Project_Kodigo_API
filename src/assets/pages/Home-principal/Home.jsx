import React from "react";
import { Header } from "../header/Header";
import { Welcome } from "../welcome/Welcome";
import { Bootcamps } from "../Bootcamps/Bootcamps";
import Footer from "../Footer/Footer";

export const Home = () => {

    return (
        <div id="Container-Home">
            <Header/>
       
                <Welcome/>

                <Bootcamps/>

            <Footer/>
        </div>
    )
}

