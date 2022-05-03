import React, { useState } from 'react'
import HeaderAdmin from '../../../components/Header/HeaderAdmin'
import { BsSearch } from "react-icons/bs";

import calendario from '../../../assets/calendar.jpg'
import SideBar from '../../../components/SideBar';
import { Link } from 'react-router-dom';
import ShowData from '../../../components/Eventos/ShowData';

const Events = () => {

    const [showEvent, setShowEvent] = useState(true)

    let events = true;

    const handleEvent = () => {
        setShowEvent(true)
    }

    const handleEvent2 = () => {
        setShowEvent(false)
    }

  return (
    <div>
        <HeaderAdmin />
        <SideBar />
        <hr />

        <div className=' container w-11/12 mt-28 pl-60'>
            <h1 className=' text-6xl text-titleTextColor font-bold'>Eventos</h1>
            <div className="flex flex-row mt-10 ml-3 justify-end w-4/5">
                <div className="">
                    <button
                        onClick={handleEvent}
                        className={
                            showEvent ? 
                            'bg-blue-50 border-blue-400 text-blue-700 text-center flex-initial w-32 border py-3 px-2 mr-2 rounded-lg' : 
                            'bg-white text-center flex-initial w-32 border py-3 px-2 mr-2 rounded-md'
                        }>
                        Lista
                    </button>
                </div>
                <div className="">
                    <button onClick={handleEvent2}
                        className={
                            showEvent ? 
                            'bg-white text-center flex-initial w-32 border py-3 px-2 mr-2 rounded-md' : 
                            'bg-blue-50 border-blue-400 text-blue-700 text-center flex-initial w-32 border py-3 px-2 mr-2 rounded-lg'
                        }>
                        Calendario
                    </button>                    
                </div>
                <div className="bg-bgButton hover:bg-bgButtonHover ml-16 w-48 text-center text-white rounded-lg">
                    <Link to="/Crear_Evento">
                        <button className='py-3 px-2 font-bold'>
                            Crear evento
                        </button>
                    </Link>
                </div>
            </div>
            <div className="flex flex-row mt-10">
                <div className='flex flex-row w-full py-2'>
                    <div className="-mr-32 w-3/6 flex flex-row">
                        <BsSearch className="relative top-6 left-8" />
                        <input
                        className="w-4/5 bg-white border h-13 px-12"
                        placeholder="Buscar evento"
                        type="text"
                        />
                    </div>
                    <div className="w-1/4 border ml-8">
                        <div className='flex flex-col py-2 px-3 bg-white'>
                            <label htmlFor="" className=' text-sm '>Estado del evento</label>
                            <select name="" id="" className='text-base font-bold '>
                                <option value="">Todos</option>
                                <option value="">Publicado</option>
                                <option value="">Anterior</option>
                                <option value="">Borradores</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {
                showEvent === true ? (
                    events !== true ? (
                        <div className="flex flex-col mt-10 justify-center ml-20">
                            <div className='flex justify-center'>
                                <img src={calendario} alt="" className='h-32 w-32'/>
                            </div>
                            <div className='flex justify-center'>
                                <p className='text-gray-600 font-bold'>No hay eventos que mostrar</p>
                            </div>
                        </div>
                    ) : (
                        <>
                            <ShowData />
                        </>
                    )

                ):
                (   
                    <div>
                        Hola
                    </div>
                )
            }
            
        </div>
    </div>
  )
}

export default Events