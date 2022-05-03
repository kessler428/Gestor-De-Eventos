import React from 'react'
import { CgNotes } from 'react-icons/cg'
import { GoGraph } from 'react-icons/go'
import { AiOutlineBank } from 'react-icons/ai'
import {BsCalendarDate, BsGearFill } from 'react-icons/bs';

import '../../index.css'
import { Link } from 'react-router-dom'

interface iconsSideBar {
    icon: any;
    text: string;
}

const SideBar = () => {
  return (
    <div className='fixed mt-20 pt-1 top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-100 text-black border-r'>
        <Link to="/events">
          <SideBarIcon icon={<BsCalendarDate size="20" />} text="Eventos"/>
        </Link>
        <Link to="/pedidos">
          <SideBarIcon icon={<CgNotes size="20"/>} text="Pedidos" />
        </Link>
        <Link to="/reportes">
          <SideBarIcon icon={<GoGraph size="20"/>} text="Reportes" />
        </Link>
        <Link to="/finanzas">
          <SideBarIcon icon={<AiOutlineBank size="20"/>} text="Finanzas" />
        </Link>
        <Link to="/Configuraciones">
          <SideBarIcon icon={<BsGearFill size="20"/>} text="Ajustes de organización"/>
        </Link>
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