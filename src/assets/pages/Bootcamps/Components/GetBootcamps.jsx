import React from 'react'
import { getAllBootcamps, deleteBootcamp } from "../../../../services/bootcamp.services";
import { useState, useEffect } from 'react';


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
    <div>
        <h2>Bootcamps</h2>
        <div>
            <div className="container">
                {bootcamps.map(bootcamp => (
                    <div className="bootcamp" key={bootcamp.id}>
                        <h3>{bootcamp.name}</h3>
                        <p>{bootcamp.description}</p>
                        <h4>Tecnologías:</h4>
                        <ul>
                            {bootcamp.technologies.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>
                        <p>Activo: {bootcamp.active.toString()}</p>
                        <div>
                            <button>Editar</button>
                            <button onClick={()=>{deactiveBootcamp(bootcamp.id)}}>Eliminar</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    </div>
  )
}
