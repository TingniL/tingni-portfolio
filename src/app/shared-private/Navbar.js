// src/app/shared-private/Navbar.js
import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-8">
        <h1 className="text-3xl font-bold hover:text-pink-200 transition-colors">Tingni LI</h1>
        <div>
          <a href="#home" className="mx-4 hover:text-pink-200 transition-colors">Home</a>
          <a href="#about" className="mx-4 hover:text-pink-200 transition-colors">About</a>
          <a href="#projects" className="mx-4 hover:text-pink-200 transition-colors">Projects</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
