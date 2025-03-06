// src/app/shared-private/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 text-center">
      <div className="container mx-auto px-8">
        <p className="text-sm">&copy; {new Date().getFullYear()} Tingni LI. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
