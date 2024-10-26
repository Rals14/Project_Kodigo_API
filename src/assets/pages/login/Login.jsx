import React from 'react'
import "./Login.css"
import logo from "../../img/kodigo_logo.png"



export const Login = () => {



  return (
    <div className='login-container'>
    
      <form id='container'>

      <div> 

      <img id='img_logo' src= {logo} alt='Kodigo_logo'/>
      
      
      </div>


      {/* IMPUT DATA AND BTN*/}
      
        
        <input type='text' id='Email_User' placeholder='Nombre de usuario'  />
    
        <input type='password' id='Password_User' placeholder='Contraseña'  />
        
        <button type='submit' id='acceso'>Acceder</button>
        <button type='submit' id='New_user'>Nuevo usuario</button>


        {/*CONFIG USER*/}

        <div id='Container_Mod'>

          <a href='#' id='Mod_User'>¿Olvidaste tu Contraseña?</a>

          <a href='#'>Aviso de cookies</a>

        </div>


      </form>
    </div>
  )
}
