import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.svg";
import lateralImage from "../../assets/lateral-image.jpg"

const Register = () => {

  return (
    <div className='container flex mx-auto w-screen h-screen'>
      <div className='w-1/2 flex-row'>
        <div className="w-32 lg:w-60 py-4 ml-36">
          <Link to="/">
            <img className=" w-28" src={logo} alt="Logo polpoevents" />
          </Link>
        </div>
        <h1 className='text-5xl font-bold ml-36 mt-5 text-titleTextColor'>Crear una cuenta</h1>
        <form className='justify-center items-center flex flex-col'>
          <div className='w-3/5 pt-2 bg-white mt-10 border'>
            <label className='block text-gray-700 text-sm font-bold ml-3'>Direccion de correo electronico</label>
            <input 
              type="text" 
              className=' rounded w-full text-gray-700 px-4 pb-1'
            />
          </div>
          <div className='mb-6 w-3/5 border pt-2 bg-white mt-5'>
            <label className='block text-gray-700 text-sm font-bold ml-3'>Confirmar correo electronico</label>
            <input 
              type="text" 
              className=' rounded w-full text-gray-700 px-4 pb-1'
            />
          </div>
            <div className='flex flex-row w-full justify-center'>
                <div className='mb-6 w-52 border pt-2 bg-white'>
                    <label className='block text-gray-700 text-sm font-bold ml-3'>Nombre</label>
                    <input type="text"  className='bg-white px-3'/>
                </div>
                <div className='mb-6 w-52 ml-4 border pt-2 bg-white'>
                    <label className='block text-gray-700 text-sm font-bold ml-3'>Apellido</label>
                    <input type="text" className='bg-white px-3'/>
                </div>
          </div>
          <div className='mb-6 w-3/5 border pt-2 bg-white'>
            <label className='block text-gray-700 text-sm font-bold ml-3'>Contraseña</label>
            <input 
              type="password" 
              className=' rounded w-full bg-white text-gray-700 px-4 pb-1'
            />
          </div>
          <div className='w-3/5' >
            <button 
                className=' px-4 w-full py-4 bg-orange-600 text-white font-bold hover:bg-orange-700'
            >
              Crear cuenta
            </button>
          </div>
        </form>
        <div className="justify-center mt-8 flex">
        <a className='w-3/5 py-4 border text-center rounded-lg text-xl text-blue-700 hover:bg-gray-200' href="/login">
            Iniciar sesión
          </a>
        </div>
      </div>
      <div className='w-1/2 right-0 absolute h-full'> 
        <img src={lateralImage} alt=""/>
      </div>
    </div>
  )
}

export default Register;