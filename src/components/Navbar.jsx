import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [activeRound, setActiveRound] = useState('Connect');

  const handleHover = (item) => {
    setActiveRound(item === 'Connect' ? 'Folder' : 'Connect');
  };

  return (
    <header id="navbar">
      <nav className="navigation">
        <Link 
          to="/folder" 
          className={activeRound === 'Folder' ? 'round' : ''}
          onMouseEnter={() => handleHover('Folder')}
          data-hover="Folder"
        >
          <span className="text-wrapper">Folder</span>
        </Link>
        <Link 
          to="/" 
          className={`${activeRound === 'Connect' ? 'round' : ''} active`}
          onMouseEnter={() => handleHover('Connect')}
          data-hover="Connect"
        >
          <span className="text-wrapper">Connect</span>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;

