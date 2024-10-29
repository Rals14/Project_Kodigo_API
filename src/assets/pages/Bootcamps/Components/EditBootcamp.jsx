import { updateBootcamp } from "../../../../services/bootcamp.services";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./EdiBootcamp.css"
import Footer from "../../Footer/Footer";

export const EditBootcamp = (bootcamp) => {
    const { register, handleSubmit, setValue, getValues } = useForm();
    const [technologies, setTechnologies] = useState([]);
    const navigate = useNavigate();
    
    const handleAddTechnology = () => {
        const newTechnology = getValues('technologies').trim();

        if (newTechnology) {
            setTechnologies([...technologies, newTechnology]);
            setValue('technologies', '');
        }

    };

    useEffect (() => {
        setValue('id', localStorage.getItem('id'));
        setValue('name', localStorage.getItem('name'));
        setValue('description', localStorage.getItem('description'));
        setValue('technologies', localStorage.getItem('technologies'));
    })    


    
    const onSubmitForm = async (data) => {
        const token = localStorage.getItem('token')
        console.log(token);

        if (technologies === 0) {
            alert("Las tecnologias no pueden estar vacias")
            return;
        }

        const bootcampData = {
            ...data,
            technologies,
        };
        const respuesta = await updateBootcamp(token, bootcampData)
        console.log(respuesta);
        alert(respuesta.message);
        navigate('/home')


    }




    return (
        <div>       
        <div className="Container-edit">

        <h1>BIENVENIDO AL SISTEMA DE EDICIÓN</h1>
        <h3>Modifica los datos que sean de tu interes:</h3>

            <form id="form-edit" onSubmit={handleSubmit(onSubmitForm)}>
            <input type='hidden'  {...register("id")} />

                <label>Nombre del Bootcamps:</label>
                <input className="inputs-form" type='text' placeholder='Ingresa el nombre del bootcamp' {...register("name")} />


                <label>Descripción del Bootcamps:</label>
                <input className="inputs-form" id="description" type='text' placeholder='Ingresa una descripción' {...register("description")} />

                <div>
                    <label>Tecnologías, agrega una a la vez: <br/></label>

                    <input className="inputs-form" id="input-tag" type='text'{...register("technologies")} placeholder='Ingresa las tecnologias una a la vez' />
                    <button id="agregar" type="button" onClick={handleAddTechnology}>Agregar</button>

                    <ul id="ul-edit">
                        {technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                </div>

                <button id="guardar" type='submit'>Guardar</button>

            </form>
        </div>

        <Footer/>

        </div>
 
        
    )
}