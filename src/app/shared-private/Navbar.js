// src/app/shared-private/Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const content = {
  en: {
    home: "Home",
    about: "About",
    projects: "Projects"
  },
  fr: {
    home: "Accueil",
    about: "À Propos",
    projects: "Projets"
  },
  zh: {
    home: "首页",
    about: "关于",
    projects: "项目"
  }
};

function Navbar({ language, setLanguage }) {
  const location = useLocation();
  const text = content[language];

  return (
    <nav className="fixed w-full z-50 flex justify-between items-center px-8 py-4 bg-opacity-90 backdrop-blur-sm">
      <div className="flex gap-8 text-white">
        <Link 
          to="/" 
          className={`hover:text-gray-300 ${
            location.pathname === '/' ? 'text-pink-200' : ''
          }`}
        >
          {text.home}
        </Link>
        <Link 
          to="/about" 
          className={`hover:text-gray-300 ${
            location.pathname === '/about' ? 'text-pink-200' : ''
          }`}
        >
          {text.about}
        </Link>
        <Link 
          to="/projects" 
          className={`hover:text-gray-300 ${
            location.pathname === '/projects' ? 'text-pink-200' : ''
          }`}
        >
          {text.projects}
        </Link>
      </div>
      <div className="flex gap-2">
        {['en', 'fr', 'zh'].map((lang) => (
          <button
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`px-3 py-1 rounded-full text-sm ${
              language === lang 
                ? 'bg-white text-indigo-600' 
                : 'text-white border border-white hover:bg-white/10'
            }`}
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
