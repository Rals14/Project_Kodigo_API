
import { createBootcamp } from "../../../../services/bootcamp.services";
import { useForm } from "react-hook-form";
import  { useState } from 'react';

export const CreateBootcamp = () => {
  const { register, handleSubmit, setValue, getValues } = useForm();
  const [technologies, setTechnologies] = useState([]);
  /*Function for arrays*/

  const handleAddTechnology = () => {
    const newTechnology = getValues('technologies').trim(); // Obtiene y limpia el valor del input

    if (newTechnology) {
      setTechnologies([...technologies, newTechnology]); // Agrega el valor al array
      setValue('technologies', ''); // Resetea el input
    }
  };


  const onSubmitForm = async (data) => {
    const token = localStorage.getItem('token')
    console.log(token);

    if(technologies === 0){
      alert("Las tecnologias no pueden estar vacias")
      return;
    }

    const bootcampData = {
      ...data,
      technologies, // Añade el array de tecnologías
    };
    // const arrayDeStrings = data.technologies.split(',').map(item => item.trim());
   const respuesta =  await createBootcamp(token, bootcampData)
    console.log(respuesta);
    


  }




  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitForm)}>
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
       
        <button type='submit'>Crear</button>

       
      </form>
    </div>
  )
}
