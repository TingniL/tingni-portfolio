// src/App.js
import React, { useState, useEffect } from 'react';
import Navbar from "./app/shared-private/Navbar";
import Home from "./app/home/Home";
import Footer from "./app/shared-private/Footer";
import Loading from './app/shared-private/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {isLoading ? (
        <Loading />
      ) : (
        <Home />
      )}
      <Footer />
    </div>
  );
}

export default App;