import React from 'react';
import {Link} from "react-router-dom"



const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('../public/assets/bg.jpg')` }}>
     

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-screen">

        
        
        <div className="flex flex-col items-center justify-center text-center text-white h-screen">
  <h1 className="text-8xl font-bold mb-5">Your Rentals Solution Simplified! 🏘️</h1>
  <p className="text-3xl italic leading-relaxed">
    Streamline your properties rentals with ease and connect with the right tenants today.
  </p>

  
</div>

      </div>
    </div>
  );
};

export default HomePage;