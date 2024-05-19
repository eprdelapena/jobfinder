import React from 'react'
import { Link, NavLink } from "react-router-dom"
import logo from '../assets/images/logo.png'
import { FiAlertTriangle } from "react-icons/fi";

const Errors = () => {
  return (
    <> 
        <nav className="bg-indigo-700 border-b border-indigo-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
        
            <a className="flex flex-shrink-0 items-center mr-4" href="/index.html">
              <img className="h-10 w-auto" src={logo} alt="React Jobs" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2"
                >React Jobs</span>
            </a>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <a
                  href="/homepage"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Home</a>
                <a
                  href="/jobs"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Jobs</a>
                <a
                  href="/addjobs"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Add Job</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <section className="text-center flex flex-col justify-center items-center h-96">
      <FiAlertTriangle size={70} className="fas fa-exclamation-triangle text-yellow-400 fa-4x mb-4"/>
      <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
      <p className="text-xl mb-5">This page does not exist</p>
      <Link to="/homepage" className="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"> Go Back </Link>
    </section>
    </>
  )
}

export default Errors