// src/components/Navbar.jsx
import React from 'react';

const Navbar = ({ onScrollTo }) => {
  return (
    <div className="absolute top-0 left-0 w-full z-50 bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">E-Mining</h1>
        <div className="flex space-x-6">
          <button onClick={() => onScrollTo('home')}>Home</button>
          <button onClick={() => onScrollTo('about')}>About</button>
          <button onClick={() => onScrollTo('market')}>Market Insights</button>
          <button onClick={() => onScrollTo('explore')}>Explore More</button>
          <button onClick={() => onScrollTo('contact')}>Contact</button>
        </div>
        <div className="flex space-x-2">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded">Login</button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded">Admin</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
