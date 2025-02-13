import React from 'react';
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-20 bg-transparent">
      <div className="flex justify-between items-center px-10 py-4">
        <div className="w-1/2 mt-4 flex items-center">
          <FaHome size={90} className="text-blue-500" />
          <h1 className="text-white text-3xl font-bold ml-4">
            Terra<span className="text-blue-400">Vista</span>
          </h1>
        </div>
        <div className="flex justify-center items-center space-x-16">
          <Link to ="/" className="text-white hover:text-blue-400 transition">Home </Link>
          <Link to ="/features" className="text-white hover:text-blue-400 transition">Features</Link>
          <Link to ="/about" className="text-white hover:text-blue-400 transition">About Us</Link>
        </div>

        <div className="flex space-x-4">
          <Link to="/register">
          <button className="px-4 py-2 text-white border border-blue-400 rounded-md hover:bg-blue-400 transition">Register</button>
          </Link>
          <Link to="/login ">
          <button className="px-4 py-2 text-white bg-blue-400 rounded-md hover:bg-blue-500 transition">Login</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
