import Header2 from "../../../components/Header/Header";
import { AiOutlineHeart, AiOutlineCar } from 'react-icons/ai';
import { BiWalk, BiBusSchool } from 'react-icons/bi';
import { MdOutlineDirectionsBike } from 'react-icons/md'
import { NavLink } from "react-router-dom";

export const VerEvento = () => {
  return (
    <>
        <Header2 />
        <div className="h-full w-full mb-96">
            <div className="w-full h-1/2 bg-orange-400 absolute flex"></div>
            <div className="w-4/5 mx-auto p-4 bg-gray-200 border relative">
                <span className="p-4">
                    Necesitas hacer algunas actualizaciones..?
                    <NavLink className='text-blue-600 font-bold ml-5' to="">Editar Evento</NavLink>
                </span>
            </div>
            <div className="w-4/5 mx-auto h-full bg-white border rounded-md top-12 relative">
                <div className="flex flex-row h-auto ">
                    <div className="w-2/3">
                        <img className="w-full" src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F132881255%2F512772892031%2F1%2Foriginal.20210421-051736?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C36%2C1610%2C805&s=4106f793e84f367740a33bbea6c669b6" alt="" />
                    </div>
                    <div className="w-1/3 mx-0 bg-gray-200">
                        <div className="w-5/6 mx-auto h-full flex-col flex justify-between ">
                            <div className="mt-6">
                                <div>
                                    <span>APR <br /> 23</span>
                                </div>
                                <div className="text-xl mt-6 font-bold">
                                    <p>Pre-Encuentro #1 - Encuentro Vendedores</p>
                                </div>
                            </div>
                            <div>
                                <span>Free</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between h-20 items-center border-2 ">
                    <div className="w-1/2">
                        <AiOutlineHeart className="ml-4 w-6 h-6"/>
                    </div>
                    <div className="w-1/2 flex flex-row justify-around">
                        <div className="mt-2">
                            <p>Ventas Finales</p>
                        </div>
                        <div className="w-1/2">
                            <button className=" w-full py-2 border-2 border-black">
                                Detalles
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-row border-2 pb-4">
                    <div className="w-2/3">
                        <div className="p-20">
                            <h3 className="text-xl font-bold">Descripcion</h3>
                            <p className="mt-2 text-lg">Te invitamos a formar parte de tu primer pre encuentro camino al encuentro Vencedores.</p>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <div className="mt-10">
                            <h3 className="text-xl">Fecha y hora</h3>
                            <div className="mt-4">
                                <span>Viernes 23 de Abril 2021, 7:00pm - </span>
                                <span>Sabado 24 de Abril 2021, 9:00 pm CST</span>
                            </div>
                        </div>
                        <div className="mt-10">
                        <h3 className="text-xl">Ubicacion</h3>
                            <ul className="mt-4">
                                <li>Iglesia Oasis</li>
                                <li>Salon Mix</li>
                                <li>Iglesia Oasis</li>
                                <li>San Vicente, San Jose 11401</li>
                                <li></li>
                                <li>Costa Rica</li>
                                <a href="/">Ver Mapa</a>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col text-center justify-center items-center p-10">
                    <span>Organizador de Pre-Encuentro #1 - Encuentro Vencedores</span>
                    <button className="mt-2 p-4 hover:bg-gray-200 text-blue-500 font-bold rounded-lg">Contactar al Organizador</button>
                </div>
                <div>
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d62423.89286618195!2d-86.23862423756167!3d12.078343911440601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sni!4v1652130728430!5m2!1sen!2sni" width="100%" height="600" ></iframe>
                </div>
                <div className="flex flex-col items-center p-10">
                    <h2 className="text-xl font-bold text-titleTextColor">Pre-Encuentro #1 - Encuentro Vencedores</h2>
                    <span>en</span>
                    <span className="text-xl font-bold text-titleTextColor">Iglesia Oasis</span>
                    <p className="mt-2">Salon Mix Iglesia Oasis, San Vicente, San Jose 11401</p>
                    <div className="flex flex-row mt-6 gap-4">
                        <AiOutlineCar className="w-6 h-6" />
                        <BiWalk className="w-6 h-6" />
                        <BiBusSchool className="w-6 h-6" />
                        <MdOutlineDirectionsBike className="w-6 h-6" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
