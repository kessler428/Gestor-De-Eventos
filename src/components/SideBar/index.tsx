import { CgNotes } from 'react-icons/cg'
import { GoGraph } from 'react-icons/go'
import { AiOutlineBank } from 'react-icons/ai'
import {BsCalendarDate, BsGearFill } from 'react-icons/bs';

import '../../index.css'
import { NavLink } from 'react-router-dom'
import { iconsSideBar } from '../../interfaces/InterfacesSideBar';

const SideBar = () => {
  return (
    <div className='fixed mt-[76px] top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-100 text-black border-r'>
        <NavLink className={ ({isActive}) => isActive ? 'bg-blue-400 mt-6 mb-4 p-4 text-white rounded mx-1' : 'mt-4 mb-4 p-4  hover:bg-white'} to="/events">
          <SideBarIcon icon={<BsCalendarDate size="20" />} text="Eventos"/>
        </NavLink>
        <NavLink className={ ({isActive}) => isActive ? 'bg-blue-400 mt-6 mb-4 p-4 text-white rounded mx-1' : 'mt-4 mb-4 p-4  hover:bg-white'} to="/pedidos">
          <SideBarIcon icon={<CgNotes size="20"/>} text="Pedidos" />
        </NavLink>
        <NavLink className={ ({isActive}) => isActive ? 'bg-blue-400 mt-6 mb-4 p-4 text-white rounded mx-1' : 'mt-4 mb-4 p-4  hover:bg-white'} to="/reportes">
          <SideBarIcon icon={<GoGraph size="20"/>} text="Reportes" />
        </NavLink>
        <NavLink className={ ({isActive}) => isActive ? 'bg-blue-400 mt-6 mb-4 p-4 text-white rounded mx-1' : 'mt-4 mb-4 p-4  hover:bg-white'} to="/finanzas">
          <SideBarIcon icon={<AiOutlineBank size="20"/>} text="Finanzas" />
        </NavLink>
        <NavLink className={ ({isActive}) => isActive ? 'bg-blue-400 mt-6 mb-4 p-4 text-white rounded mx-1' : 'mt-4 mb-4 p-4  hover:bg-white'} to="/Configuraciones">
          <SideBarIcon icon={<BsGearFill size="20"/>} text="Ajustes de organización"/>
        </NavLink>
    </div>
  )
}

const SideBarIcon = ({ icon, text }: iconsSideBar) =>(
  <div className='sideBarIcon group'>
    {icon}
    <span className='sideBar-Tooltip group-hover:scale-100'>
      {text }
    </span>
  </div>
);

export default SideBar;