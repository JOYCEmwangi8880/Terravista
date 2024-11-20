import React from 'react';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-20 bg-transparent">
      <div className="flex justify-between items-center px-10 py-4">
        {/* Logo */}
        <img src='../public/assets/logo.jpg' alt='logo' className='h-16' />
        {/* <h1 className="text-white text-2xl font-bold">
          The<span className="text-blue-400">Home</span>
        </h1> */}

        {/* Links */}
        <div className="flex space-x-6">
          <a href="#home" className="text-white hover:text-blue-400 transition">
            Home
          </a>
          <a href="#features" className="text-white hover:text-blue-400 transition">
            Features
          </a>
          <a href="#about" className="text-white hover:text-blue-400 transition">
            About Us
          </a>
        </div>

        {/* Register/Login Buttons */}
        <div className="flex space-x-4">
          <button className="px-4 py-2 text-white border border-blue-400 rounded-md hover:bg-blue-400 transition">
            Register
          </button>
          <button className="px-4 py-2 text-white bg-blue-400 rounded-md hover:bg-blue-500 transition">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;