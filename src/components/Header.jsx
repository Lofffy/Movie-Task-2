import React, { useState } from 'react';
import logo from '../assets/Logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex container mx-auto mt-7 justify-between mb-7 items-center">
      <div className="flex items-center">
        <img className="w-40 h-12" src={logo} alt="Logo" />
      </div>
      <div className="hidden sm:flex space-x-4">
        <a href="#" className="text-white">Home</a>
        <a href="#" className="text-white">Recents</a>
        <a href="#" className="text-white">Trending</a>
      </div>
      <div className="hidden sm:flex items-center space-x-4">
        <i className="fa-regular fa-user text-white"></i>
        <a href="#" className="text-white font-sans">Login</a>
      </div>

      {/* Drawer Toggle Button for Small Screens */}
      <button onClick={toggleDrawer} className="sm:hidden text-white text-2xl">
        <i className="fas fa-bars"></i>
      </button>

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full bg-gray-900 p-6 z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out sm:hidden`}>
        <button onClick={toggleDrawer} className="text-white mb-4">
          <i className="fas fa-times text-2xl"></i>
        </button>
        <ul className="space-y-4">
          <li><a href="#" className="text-white">Home</a></li>
          <li><a href="#" className="text-white">Recents</a></li>
          <li><a href="#" className="text-white">Trending</a></li>
          <li><a href="#" className="text-white">Login</a></li>
        </ul>
      </div>
    </nav>
  );
}
