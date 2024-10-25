import React from 'react'
import {useForm} from "react-hook-form"
import "./New_user.css"
import logo from "../../../img/kodigo_logo.png"

export const New_user = () => {

  const {register, handleSubmit} = useForm();

  const onSubmitForm = (data) => {

    console.log(data)

  }
      

  return (
    <div>
      <form id='Container_New_User'>

      <img id='img_logo' src= {logo} alt='Kodigo_logo'/>

     
        <input type='text' id='New_Email_User' placeholder='Nombre de usuario' {... register("New_Email_User")} />
   
        <input type='password' id='New_Password_User' placeholder='Contraseña' {... register("New_Password_User")} />
      
        <input type='password' id='New_Password_Confirm' placeholder='Repita su Contraseña' {... register("New_Password_Confirm")} />
        
        <button type='Submit' id='Register'>Registrar usuario</button>

        <div id='Container-config'>

        <a href='#' id='Atras'>¿Ya tienes cuenta existente? inicia sesión </a>


        </div>
        
      </form>
    </div>
  )
}
