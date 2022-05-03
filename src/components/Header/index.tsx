import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import HeaderMenu from "../HeaderMenu";
import { BsThreeDotsVertical, BsSearch } from "react-icons/bs";

function Header() {
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
      <div className="w-6/12 justify-end lg:w-6/12 flex items-center h-full">
        <div className="hidden lg:w-8/12 lg:flex lg:flex-[0_0_auto] h-[72px] items-center justify-end">
          <HeaderMenu title="Organizar" />
          <HeaderMenu title="Ayuda" />
        </div>
        <div className="lg:hidden w-3/12 h-[72px] text-sky-500 items-center hover:bg-gray-200">
          <div className="flex cursor-pointer h-full items-center justify-center px-8">
            <BsSearch className="text-icons" />
          </div>
        </div>
        <div className="lg:hidden w-3/12 h-[72px] text-sky-500 items-center hover:bg-gray-200">
          <div className="flex cursor-pointer h-full items-center justify-center px-8">
            <BsThreeDotsVertical className="text-icons" />
          </div>
        </div>
        <div className="hidden lg:block lg:w-2/12 h-[72px] text-sky-500 items-center hover:bg-gray-200">
          <div className="flex cursor-pointer h-full text-center items-center justify-center">
            <Link to="/login">Cree su evento</Link>
          </div>
        </div>
        <div className="w-2/12 h-[72px] text-center items-center hover:bg-gray-200">
          <div className="flex cursor-pointer h-full items-center justify-center">
            <Link to="/login">Ingresar</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
