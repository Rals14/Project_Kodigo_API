import React from 'react'
import { getAllBootcamps, deleteBootcamp } from "../../../../services/bootcamp.services";
import { useState, useEffect } from 'react';
import "./GetBotcamps.css";
import logo_card from "../../../img/logo-cards.webp"



export const GetBootcamps = () => {
    const token = localStorage.getItem('token');
    const [bootcamps, setBootcamps] = useState([]);

    const fetchBootcamps = async () => {
        const response = await getAllBootcamps(token);
        setBootcamps(response);
        console.log(response);
    }

    const deactiveBootcamp = async (id) => {
        const response = await deleteBootcamp(token, id);
        console.log(response);
        alert(response.message);
        fetchBootcamps();

    }
    
    
    useEffect(() => {   
        fetchBootcamps();
    }, []);
    
  return (

    /*Pagina estatica:*/

    <div className='Container-main'>
        <h1>Elige tu Bootcamps</h1>
        <span>¡El futuro te llama!</span>
        <p id='p-main'>Reserva tu cupo en nuestros bootcamps y comienza tu carrera tecnológica hoy mismo</p>
        
        
        
        <section id='section-container'>

            <div className="container-bootcamps">
            
                {bootcamps.map(bootcamp => (

                    <div className="bootcamp" key={bootcamp.id}>

                        <img id="logo-cards" src={logo_card} alt="Logo Kodigo"/>

                        <h3>{bootcamp.name}</h3>
                        <p id='description'>{bootcamp.description}</p>
                        <h4>Tecnologías:</h4>

                        <ul>
                            {bootcamp.technologies.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>

                       <p id='status-p'>

                      <span id="status">Activo:</span>
                             <span className={bootcamp.active ? "status-true" : "status-false"}>
                             {bootcamp.active.toString()}
                              </span>
                       </p>
                       
                        <div>
                            <button>Editar</button>
                            <button onClick={()=>{deactiveBootcamp(bootcamp.id)}}>Eliminar</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    </div>
  )
}
