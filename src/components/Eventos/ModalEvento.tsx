import { Link } from 'react-router-dom';
import { ModalProps } from '../../interfaces/InterfacesEvents';


const ModalEvento = ({ openModal }: ModalProps) => {

    return (
        <div className='flex justify-end  -mt-96'>
            {openModal && (
                <div className="container absolute bg-white -mt-36 -m-8 shadow-lg border-2 w-auto overflow-x-hidden">
                    <div className='flex-col mx-3 my-2'>
                        
                        <div className="flex-col px-3 my-2">
                            <Link
                            to="/"
                            className="flex my-3 hover:bg-gray-100 p-3 w-full"
                            >
                            <p className="text-lg">Promoción de tu evento</p>
                            </Link>

                            <Link
                            to="/ver_evento"
                            className="flex my-3 hover:bg-gray-100 p-3 w-full"
                            >
                            <p className="text-lg">Ver</p>
                            </Link>

                            <Link
                            to="/editar_evento"
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
        </div>
    )
}

export default ModalEvento
