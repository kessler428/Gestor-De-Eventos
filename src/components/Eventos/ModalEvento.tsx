import React from 'react';
import { Link } from 'react-router-dom';

interface ModalProps {
    openModal: boolean,
}

const ModalEvento = ({ openModal }: ModalProps) => {

    return (
        <>
            {openModal && (
                    <div className="container absolute bg-white -mt-96 shadow-lg border-2 w-auto -m-10 overflow-x-hidden">
                        <div className='flex-col mx-3 my-2'>
                            
                            <div className="flex-col px-3 my-2">
                                <Link
                                to="/"
                                className="flex my-3 hover:bg-gray-100 p-3 w-full"
                                >
                                <p className="text-lg">Promoción de tu evento</p>
                                </Link>

                                <Link
                                to="/events"
                                className="flex my-3 hover:bg-gray-100 p-3 w-full"
                                >
                                <p className="text-lg">Ver</p>
                                </Link>

                                <Link
                                to="/"
                                className="flex my-3 hover:bg-gray-100 p-3 w-full"
                                >
                                <p className="text-lg">Editar</p>
                                </Link>

                                <Link
                                to="/"
                                className="flex my-3 hover:bg-gray-100 p-3 w-full"
                                >
                                <p className="text-lg">Copiar URL</p>
                                </Link>

                                <hr />

                                <Link
                                to="/"
                                className="flex my-3 hover:bg-gray-100 p-3 w-full"
                                >
                                <p className="text-lg">Copia evento</p>
                                </Link>

                                <Link
                                to="/"
                                className="flex my-3 hover:bg-gray-100 rounded-md p-3 w-full"
                                >
                                <p className="ml-2 text-lg">Eliminar</p>
                                </Link>
                            </div>
                            
                        </div>
                    </div>
                
            )}
        </>
    )
}

export default ModalEvento
