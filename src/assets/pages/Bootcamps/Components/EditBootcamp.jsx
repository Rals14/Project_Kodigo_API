import { updateBootcamp } from "../../../../services/bootcamp.services";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
        navigate('/bootcamps')


    }




    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitForm)}>
            <input type='hidden'  {...register("id")} />
                <input type='text' placeholder='Ingresa el nombre del bootcamp' {...register("name")} />

                <input type='text' placeholder='Ingresa una descripción' {...register("description")} />

                <div>
                    <input type='text'{...register("technologies")} placeholder='Ingresa las tecnologias(separalos por comas)' />
                    <button type="button" onClick={handleAddTechnology}>Agregar</button>

                    <ul>
                        {technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                </div>

                <button type='submit'>Guardar</button>


            </form>
        </div>
    )
}