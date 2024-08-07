import React, { useState } from 'react';
import './Navbar.css';
import AudioPlayer from './AudioPlayer';

const Navbar = ({ toggleMenu, menuOpen }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <header id="navbar">
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