import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Left spacer for balance */}
        <div className="w-1/3" />

        {/* Center nav links */}
        <div className="w-1/3 flex justify-center space-x-6">
          <Link to="/" className="text-lg font-medium text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/about" className="text-lg font-medium text-gray-700 hover:text-blue-600">About Us</Link>
          <Link to="/market" className="text-lg font-medium text-gray-700 hover:text-blue-600">Market Insights</Link>
          <Link to="/contact" className="text-lg font-medium text-gray-700 hover:text-blue-600">Contact</Link>
        </div>

        {/* Right buttons */}
        <div className="w-1/3 flex justify-end space-x-4">
          <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Login</Link>
          <Link to="/admin" className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">Admin</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
