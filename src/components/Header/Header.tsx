import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { RiArrowDownSLine } from 'react-icons/ri'
import { BsSearch} from 'react-icons/bs'
import { AiOutlinePlus, AiOutlineHeart} from 'react-icons/ai'
import { ImTicket } from 'react-icons/im'

const Header2 = () => {
    const [email, setEmail] = useState(false)

    const handleClick = () =>{
      setEmail(!email);
    }

  return (
    <div className="w-full flex items-center pl-8">
      <div className="w-6/12 lg:w-1/12 py-4">
        <Link to="/">
          <img className="w-[110px]" src={logo} alt="Logo polpoevents" />
        </Link>
      </div>
      <div className="hidden lg:block lg:w-5/12 px-4 py-4">
        <BsSearch className="absolute ml-4 top-8 text-icons" />
        <input
          className="w-8/12 bg-gray-200 h-12 pl-12"
          placeholder="Buscar evento"
          type="text"
        />
      </div>
      <div className="w-8/12 justify-end lg:w-6/12 flex items-center h-full">
        <div className="flex flex-col mr-12">
            <Link to="/Crear_Evento"
                className="text-blue-600"
            >
                <AiOutlinePlus className="ml-8 h-6 w-6" />
                <div className="">
                    Crea un evento
                </div>
            </Link>
        </div>

        <div className="flex flex-col mr-12">
            <Link to="/home_admin"
            >
                <AiOutlineHeart className="ml-6 h-6 w-6" />
                <div className="">
                    Me gustan
                </div>
            </Link>
        </div>

        <div className="flex flex-col mr-12">
            <Link to="/home_admin"
            >
                <ImTicket className="ml-4 h-6 w-6" />
                <div className="">
                    Entradas
                </div>
            </Link>
        </div>

        <div onClick={handleClick} className="flex cursor-pointer hover:bg-gray-100 items-center justify-center mr-4 pr-2 rounded-3xl">
              <div className="bg-gray-300 rounded-full py-3 px-3 mr-2 text-white text-xs">Dc</div>
              <button>dcalvom@gmail.com</button>
              <RiArrowDownSLine className="relative left-2"/>
            </div>
            {
              email && (
                <div className="container absolute z-40 bg-white top-20 shadow-lg w-auto pr-12 overflow-x-hidden">
                  <div className="flex-col mx-3 my-2">
                    <Link
                      to="/"
                      className="flex my-3 hover:bg-gray-100 rounded-md p-2 w-full"
                    >
                      <p className="ml-2 text-lg">Descubrir eventos</p>
                    </Link>

                    <Link
                      to="/events"
                      className="flex my-3 hover:bg-gray-100 rounded-md p-2 w-full"
                    >
                      <p className="ml-2 text-lg">Gestionar mis eventos</p>
                    </Link>

                    <hr />

                    <Link
                      to="/"
                      className="flex my-3 hover:bg-gray-100 rounded-md p-2 w-full"
                    >
                      <p className="ml-2 text-lg">Entradas</p>
                    </Link>

                    <Link
                      to="/"
                      className="flex my-3 hover:bg-gray-100 rounded-md p-2 w-full"
                    >
                      <p className="ml-2 text-lg">Créditos</p>
                    </Link>
                    <Link
                      to="/"
                      className="flex my-3 hover:bg-gray-100 rounded-md p-2 w-full"
                    >
                      <p className="ml-2 text-lg">Me han gustado</p>
                    </Link>

                    <Link
                      to="/"
                      className="flex my-3 hover:bg-gray-100 rounded-md p-2 w-full"
                    >
                      <p className="ml-2 text-lg">Siguiendo</p>
                    </Link>
                    <Link
                      to="/"
                      className="flex my-3 hover:bg-gray-100 rounded-md p-2 w-full"
                    >
                      <p className="ml-2 text-lg">Intereses</p>
                    </Link>

                    <hr/>

                    <Link
                      to="/"
                      className="flex my-3 hover:bg-gray-100 rounded-md p-2 w-full"
                    >
                      <p className="ml-2 text-lg">Ajustes de la cuenta</p>
                    </Link>

                    <Link
                      to="/"
                      className="flex my-3 hover:bg-gray-100 rounded-md p-2 w-full"
                    >
                      <p className="ml-2 text-lg">Cerrar sesion</p>
                    </Link>
                  </div>
                </div>
              )
            }
      </div>
    </div>
  )
}

export default Header2