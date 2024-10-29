import React from 'react'
import {useForm} from "react-hook-form"
import "./New_user.css"
import logo from "../../../img/kodigo_logo.png"
import { registerUser } from '../../../../services/auth.services'
import { Link } from 'react-router-dom'

export const New_user = () => {

  const {register, handleSubmit} = useForm();

  const onSubmitForm = async(data) => {
    if(data.password != data.password2){
      alert("La contraseña no coincide")

    }else{
    console.log(data)
   
    const user = {
      username: data.username,
      password: data.password
  };

   let respuesta= await registerUser(user);
   alert("Usuario Creado Correctamente")
   console.log(respuesta);
}
  
  }

   

  return (

    <div className='Container'>
      <form id='Container_New_User' onSubmit={handleSubmit(onSubmitForm)}>


      <img id='img_logo' src= {logo} alt='Kodigo_logo'/>

     
        <input type='text' id='New_Email_User' placeholder='Nombre de usuario' {... register("username")} />
   
        <input type='password' id='New_Password_User' placeholder='Contraseña' {... register("password")} />
      
        <input type='password' id='New_Password_Confirm' placeholder='Repita su Contraseña' {... register("password2")} />
        
        <button type='Submit' id='Register'>Registrar usuario</button>

        <div id='Container-config'>

       <Link to="/" id='Atras'>¿Ya tienes cuenta existente? inicia sesión</Link>


        </div>
        
      </form>
    </div>
  )
}
