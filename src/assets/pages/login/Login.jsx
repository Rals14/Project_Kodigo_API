import "./Login.css"
import logo from "../../img/kodigo_logo.png"
import { useForm } from "react-hook-form"
import { loginUser } from '../../../services/auth.services'
import { Link, useNavigate } from 'react-router-dom'





export const Login = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();


  const onSubmitForm = async (data) => {



    const response = await loginUser(data);
    console.log(response.token);
    localStorage.setItem('token',response.token);
    alert(`Bienvenido al sistema ${data.username}`)
    navigate("/home")
    console.log(data)
  

  }



  return (

    <div className="login-container">

      <form id='container' onSubmit={handleSubmit(onSubmitForm)}>


        <div>

          <img id='img_logo' src={logo} alt='Kodigo_logo' />


        </div>


        {/* IMPUT DATA AND BTN*/}


        <input type='text' id='Email_User' placeholder='Nombre de usuario'  {...register("username")} />

        <input type='password' id='Password_User' placeholder='Contraseña' {...register("password")} />

         <button type='submit' id='acceso'>Acceder</button>

        <Link to="/register"><button  id='New_user'>Nuevo usuario</button></Link>


        {/*CONFIG USER*/}

        <div id='Container_Mod'>

          <a href='#' id='Mod_User'>¿Olvidaste tu Contraseña?</a>

          <a href='#'>Aviso de cookies</a>

        </div>


      </form>
    </div>
  )
}
