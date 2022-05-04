import React from 'react';
import { Link } from 'react-router-dom';

interface ModalProps {
    openModal: boolean,
}

const ModalEvento = ({ openModal }: ModalProps) => {

    return (
        <div className='flex justify-end'>
            {openModal && (
                    <div className="container relative bg-white -mt-96 shadow-lg border-2 w-1/5 overflow-x-hidden">
                        <div className='flex-col mx-1 my-2'>
                            
                            <div className="flex-col px-1 my-2">
                                <Link
                                to="/"
                                className="flex my-3 hover:bg-gray-100 p-3 w-full"
                                >
                                <p className="text-sm">Promoción de tu evento</p>
                                </Link>

                                <Link
                                to="/events"
                                className="flex my-3 hover:bg-gray-100 p-3 w-full"
                                >
                                <p className="text-sm">Ver</p>
                                </Link>

                                <Link
                                to="/"
                                className="flex my-3 hover:bg-gray-100 p-3 w-full"
                                >
                                <p className="text-sm">Editar</p>
                                </Link>

                                <Link
                                to="/"
                                className="flex my-3 hover:bg-gray-100 p-3 w-full"
                                >
                                <p className="text-sm">Copiar URL</p>
                                </Link>

                                <hr />

                                <Link
                                to="/"
                                className="flex my-3 hover:bg-gray-100 p-3 w-full"
                                >
                                <p className="text-sm">Copia evento</p>
                                </Link>

                                <Link
                                to="/"
                                className="flex my-3 hover:bg-gray-100 rounded-md p-3 w-full"
                                >
                                <p className="ml-2 text-sm">Eliminar</p>
                                </Link>
                            </div>
                            
                        </div>
                    </div>
                
            )}
        </div>
    )
}

export default ModalEvento
