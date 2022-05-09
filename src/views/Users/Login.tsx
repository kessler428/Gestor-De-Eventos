import React from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import logo from "../../assets/logo.svg";
import lateralImage from "../../assets/lateral-image.jpg"

const Login = () => {
  let navigate = useNavigate();

  const {register, handleSubmit, formState: { errors },} = useForm();

  const onsubmit = (data : any) => {
    const { email, password } = data;
    if (email === 'ktorres@polpocr.com' && password === 'holamundo') {
      navigate('/home_admin');
    }else{
      Swal.fire({
        icon: 'error',
        text: 'Usuario o contraseña incorrecta.!',
      })
    }
  };

  return (
    <div className='container flex mx-auto w-screen h-screen'>
      <div className='w-1/2 flex-row'>
        <div className="w-32 lg:w-60 py-4 ml-36">
          <Link to="/">
            <img className=" w-28" src={logo} alt="Logo polpoevents" />
          </Link>
        </div>
        <h1 className='text-5xl font-bold ml-36 mt-5 text-titleTextColor'>Iniciar sesion</h1>
        <form 
          onSubmit={handleSubmit(onsubmit)}
          className='justify-center items-center flex flex-col'
        >
          <div className='mb-6 w-3/5 border pt-1 bg-white mt-10'>
            <label className='block text-gray-500 text-sm ml-3'>Direccion de correo electronico</label>
            <input 
              className=' rounded w-full text-gray-700 px-4 outline-none pb-2'
              type="email" 
              autoComplete="off"
              {...register("email", {
                required: {
                  value: true,
                  message: "Escribe tu correo",
                },

                maxLength: {
                  value: 40,
                  message: "Maximo de caracteres 40",
                },

                minLength: {
                  value: 2,
                  message: "Minimo de caracteres 2",
                },

                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Escribe un correo valido",
                },
              })}
            />
            <p className="text-red-900 text-1s absolute">
              {errors.email && errors.email.message}
            </p>
          </div>
          <div className='mb-6 w-3/5 border pt-1 bg-white'>
            <label className='block text-gray-500 text-sm ml-3'>Contraseña</label>
            <input 
              className=' rounded w-full text-gray-700 px-4 pb-2 outline-none'
              autoComplete="off"
              type="password" 
              {...register("password", {
                required: {
                  value: true,
                  message: "Escribe tu contraseña",
                },

                maxLength: {
                  value: 25,
                  message: "Maximo de caracteres 25",
                },

                minLength: {
                  value: 2,
                  message: "Minimo de caracteres 2",
                },
              })}
            />
             <p className="text-red-900 text-1s absolute">
              {errors.password && errors.password.message}
            </p>
          </div>
          <div className='w-3/5' >
          <button className=' px-4 w-full rounded-md py-4 bg-bgButton text-white font-bold hover:bg-bgButtonHover'>
              Iniciar Sesión
            </button>
          </div>
        </form>

        <hr className='mt-5 w-3/5 mx-auto' />

        <div className="justify-center mt-8 flex">
          <a className='w-3/5 py-4 border text-center rounded-lg text-xl text-blue-700 hover:bg-gray-200' href="/register">
            Registrarse
          </a>
        </div>
      </div>
      <div className='w-1/2 right-0 absolute h-full'> 
        <img src={lateralImage} alt=""/>
      </div>
    </div>
  )
}

export default Login