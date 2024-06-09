import React, { useState } from 'react';
import './Navbar.css';
import AudioPlayer from './AudioPlayer'; // Assuming the sound icon is part of the AudioPlayer component

const Navbar = ({ toggleMenu, menuOpen }) => {
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
      <div className="sound-icon" onClick={togglePlayPause}>
        <AudioPlayer isPlaying={isPlaying} />
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
    </header>
  );
};

export default Navbar;

       
