import React from 'react';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('../public/assets/bg.jpg')` }}>
      {/* Navbar */}
      <Navbar />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between px-10 py-20">
        {/* Image on the Left */}
        <div className="w-1/2 mt-16">
          <img
            src="../public/assets/register.jpg"
            alt="Hotel"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text on the Right */}
        <div className="w-3/4 pl-10 text-white">
          <h1 className="text-4xl font-bold mb-5">!</h1>
          <p className="text-lg leading-relaxed">
            Streamline your property rentals with ease and connect with the right tenants today .
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;