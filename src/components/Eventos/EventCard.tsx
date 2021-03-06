import { useState } from 'react'
import { EventData } from './EventData';
import ModalEvento from "./ModalEvento"
import More from "../../assets/More.svg";
import EventoTech from "../../assets/evento-tech.jpeg"

import {AiOutlineEyeInvisible} from 'react-icons/ai'

const EventCard = () => {
    
    const [openModal, setOpenModal] = useState(false);

    return (
        <>  
            { 
                EventData.map((item, index) => (            
                    <div key={index} className="py-5 w-4/5 flex flex-row pl-8 ml-4 border-b hover:shadow-lg">
                        <div className='w-2/3'>
                            <div className='flex flex-row'>
                                <div className="mt-5">
                                    <p className='text-red-600'>{item.mes}</p>
                                    <p className='text-center text-gray-500 font-bold text-xl'>{item.dia}</p>
                                </div>
                                <div className='h-20 w-20 ml-5 mt-5'>
                                    <img src={EventoTech} alt="" />
                                </div>
                                <div className='flex flex-col ml-5 hover:underline'>
                                    <div className=''>
                                        <h1>{item.title}</h1>
                                    </div>
                                    <div className=' text-xs text-gray-500'>
                                        <p>{item.lugar}</p>
                                        <p>{item.fecha}</p>
                                    </div>
                                    <div>
                                        <AiOutlineEyeInvisible />
                                        Privado
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex-row w-1/2 flex justify-around pl-8 text-gray-500 mt-5'>

                            <p className="">0/100</p>
                        
                            <p className="">0,00$</p>
                            <div className=' flex flex-row'>
                                <p className="">Evento <br /> Finalizado</p>
                                <div className=''>
                                    <img
                                    className="ml-2 -mt-2 cursor-pointer hover:rounded-full hover:bg-gray-100 px-6 py-4"
                                    src={More}
                                    alt="More"
                                    onClick={() => {
                                        setOpenModal(!openModal)
                                    }}
                                    />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                ))
            }
            {openModal && (
                <ModalEvento
                    openModal={openModal}
                />
            )}
        </>
    )
}

export default EventCard;