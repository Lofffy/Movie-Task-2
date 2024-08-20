import React from 'react'
import logo from '../assets/Logo.png'
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Header() {
  return (
    <nav className="flex container mx-auto mt-7 justify-between mb-7">
        <img className='w-30 h-9' src={logo} alt="Logo" /> {/* Use your imported logo here */}
        <div className="flex my-auto">
          <a href="" className="text-white mx-2">Home</a>
          <a href="" className="text-white mx-2">Recents</a>
          <a href="" className="text-white mx-2">Trending</a>
        </div>
        <div className="flex my-auto">
          <div className="fa-regular fa-user text-white">
            <a href="" className="text-white font-sans mx-2">Login</a>
          </div>
        </div>
      </nav>
  )
}
