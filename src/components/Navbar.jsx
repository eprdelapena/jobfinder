import React from 'react'
import logo from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  let activeStyle = "text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
  let inactiveStyle = "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
  return (
    <>
      <div className="bg-indigo-700 border-b border-indigo-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center md:justify-between justify-center">

              <a className="flex flex-shrink-0 items-center mr-4" href="">  
                <img className="h-10 w-auto" src={logo} alt="React Jobs" />
                <span className="hidden md:block text-white text-2xl font-bold ml-2"> React Jobs </span>
              </a>
              
              <div className="md:ml-auto">
                <NavLink to="/homepage" className={({isActive}) => (isActive ? activeStyle : inactiveStyle)}> Home </NavLink>
                <NavLink to="/jobs" className={({isActive}) => (isActive ? activeStyle : inactiveStyle)}> Jobs </NavLink>
                <NavLink to="/addjobs" className={({isActive}) => (isActive ? activeStyle : inactiveStyle)}> Add Jobs </NavLink>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar