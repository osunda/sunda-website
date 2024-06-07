import React, { useState } from 'react';
import './Navbar.css';
import AudioPlayer from './AudioPlayer';

const Navbar = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <header id="navbar">
      <h2 className="logo">Monat</h2>
      <nav className="navigation">
        <a href="#documentation">Documentation</a>
        <a href="#vision">Vision</a>
        <a href="#tokenomics">Tokenomics</a>
        <a href="#discord">Discord</a>
      </nav>
      <div className="actions">
        <AudioPlayer isPlaying={isPlaying} togglePlayPause={togglePlayPause} />
        <div className="wallet-popup-wrapper">
          <button className="wallet-popup">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
