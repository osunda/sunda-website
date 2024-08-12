import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const encryptChar = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  return chars[Math.floor(Math.random() * chars.length)];
};

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [hoverText, setHoverText] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio('/AndanteC.mp3'));

  const navItems = ['Home', 'Folder', 'Connect', 'Music'];

  useEffect(() => {
    if (activeItem) {
      let currentIndex = 0;
      const originalText = activeItem;
      const intervalId = setInterval(() => {
        if (currentIndex <= originalText.length) {
          setHoverText(prev => ({
            ...prev,
            [activeItem]: originalText.slice(0, currentIndex).padEnd(originalText.length, '*')
          }));
          currentIndex++;
        } else {
          clearInterval(intervalId);
        }
      }, 50);

      return () => clearInterval(intervalId);
    }
  }, [activeItem]);

  const handleMouseEnter = (item) => {
    setActiveItem(item);
    setHoverText(prev => ({ ...prev, [item]: item.replace(/./g, '*') }));
  };

  const handleMouseLeave = () => {
    setActiveItem(null);
    setHoverText({});
  };

  const toggleMusic = (e) => {
    e.preventDefault();
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <header id="navbar">
      <nav className="navigation">
        {navItems.map(item => (
          <Link 
            key={item}
            to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
            onMouseEnter={() => handleMouseEnter(item)}
            onMouseLeave={handleMouseLeave}
            onClick={item === 'Music' ? toggleMusic : undefined}
            className={item === 'Music' && isPlaying ? 'playing' : ''}
          >
            <span className="text-wrapper">
              {(hoverText[item] || item).split('').map((char, index) => (
                <span key={index} className="char">
                  {char === '*' ? encryptChar() : char}
                </span>
              ))}
            </span>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;