// src/App.js
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import IntroSection from './components/IntroSection';
import Loader from './components/Loader';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Loader />
      <div id="content">
        <Navbar scrolled={scrolled} />
        <IntroSection />
      </div>
    </div>
  );
}

export default App;