import React from "react";
import "./Welcome.css";
import img_1 from "../../img/img_1.png";
import img_2 from "../../img/img_2.png";
import img_3 from "../../img/img_3.webp";


export const Welcome = () =>  {

    
    return (

        
        
        <section id="Container-welcome">


        <div id="Container-section">

        <h1>Transforma tu pasión<br/> <span>en tu profesión</span></h1>
        <p>Estudia una carrera tecnológica y descubre tu potencial  para rekodificar el futuro</p>

        </div>

        <div id="Container-img">

        <div id="Container-img-1">

        <img id="img-1" src={img_1} alt="2 peoples Kodeando"/>

        </div>

        <div id="Container-img-2">

        <img id="img-2" src={img_2} alt="Team working in kodigo"/>

        </div>

        <div id="Container-img-3">

        <img id="img-3" src={img_3} alt="KODIGO IN PC"/>

        </div>

        </div>        

        </section>
    )

}

