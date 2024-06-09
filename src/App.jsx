import React, { useState } from 'react';
import Navbar from './components/Navbar';
import IntroSection from './components/IntroSection';
import Loader from './components/Loader';
import './App.css'; // Ensure global styles are applied

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <Loader />
      <Navbar toggleMenu={toggleMenu} menuOpen={menuOpen} />
      <IntroSection />
      {menuOpen && (
        <div className="overlay" onClick={toggleMenu}>
          <nav className="overlay-navigation">
            <a href="#documentation">Documentation</a>
            <a href="#vision">Vision</a>
            <a href="#tokenomics">Tokenomics</a>
            <a href="#discord">Discord</a>
          </nav>
        </div>
      )}
    </div>
  );
};

export default App;
