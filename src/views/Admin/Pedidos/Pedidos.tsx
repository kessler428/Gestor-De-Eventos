import React from 'react'
import HeaderAdmin from '../../../components/Header/HeaderAdmin'
import { BsSearch } from "react-icons/bs";
import { FiHelpCircle } from 'react-icons/fi'

import pedidos from '../../../assets/pedidos.png'
import SideBar from '../../../components/SideBar';

export const Pedidos = () => {
  return (
    <div>
        <HeaderAdmin />
        <SideBar />
        <hr />
        <div className=' container mx-auto w-8/12 mt-28'>
            <h1 className=' text-6xl text-titleTextColor font-bold'>Pedidos</h1>
            <hr />
            <div className="flex flex-row mt-10 justify-center">
                <div className='flex flex-row w-full justify-start'>
                    <div className="-mr-32 w-6/12 flex flex-row">
                        <BsSearch className="relative top-6 left-8" />
                        <input
                        className="w-9/12 bg-white border-2 h-13 px-12"
                        placeholder="Buscar numero de pedido, correo electronico"
                        type="text"
                        />
                    </div>
                    <div className="w-1/5 border-2 ml-7">
                        <div className='flex flex-col py-2 px-3 bg-white'>
                            <label htmlFor="" className=' text-sm '>Buscar por</label>
                            <select name="" id="" className='text-base'>
                                <option value="">Comprador</option>
                                <option value="">Asistente</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-1/5 border-2 ml-3">
                        <div className='flex flex-col py-2 px-3 bg-white'>
                            <label htmlFor="" className=' text-sm '>Rango de fechas</label>
                            <select name="" id="" className='text-base'>
                                <option value="">Últimos 3 meses</option>
                                <option value="">Últimos 6 meses</option>
                                <option value="">Últimos 12 meses</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col mt-10 justify-center ml-20">
                <div className='flex justify-center'>
                    <img src={pedidos} alt="" className='h-32 bg-gray-100 rounded-full p-4 w-32'/>
                </div>
                <div className='flex justify-center'>
                    <p className='text-gray-600 font-bold'>No hay pedidos que mostrar</p>
                </div>
            </div>

            <div className='flex flex-row rounded-3xl bg-gray-200 w-2/5 px-3 py-2 mt-5'>
                <FiHelpCircle className='relative top-1'/>
                <p className='ml-2'>Obten mas informacion sobre 
                    <a href='/' className='text-blue-800'> gestionando pedidos</a>
                </p>
            </div>
        </div>
    </div>
  )
}