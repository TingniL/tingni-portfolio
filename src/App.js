// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./app/shared-private/Navbar";
import Home from "./app/home/Home";
import About from "./app/about/About";
import Projects from "./app/projects/Projects";
import Footer from "./app/shared-private/Footer";
import Loading from './app/shared-private/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar language={language} setLanguage={setLanguage} />
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/about" element={<About language={language} />} />
          <Route path="/projects" element={<Projects language={language} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;