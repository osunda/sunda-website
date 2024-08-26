import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeRound, setActiveRound] = useState('Home');

  const handleHover = (item) => {
    setActiveRound(item);
  };

  return (
    <header id="navbar">
      <nav className="navigation">
        <a 
          href="#folder" 
          className={activeRound === 'Folder' ? 'round' : ''}
          onMouseEnter={() => handleHover('Folder')}
        >
          <span className="text-wrapper">
            <span className="default">Folder</span>
            <span className="hover">Folder</span>
          </span>
        </a>
        <a 
          href="#Blog" 
          className={`${activeRound === 'Blog' ? 'round' : ''}`}
          onMouseEnter={() => handleHover('Blog')}
        >
          <span className="text-wrapper">
            <span className="default">Blog</span>
            <span className="hover">Blog</span>
          </span>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
/*
const encryptChar = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  return chars[Math.floor(Math.random() * chars.length)];
};

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [hoverText, setHoverText] = useState({});

  const navItems = ['Folder', 'Blog'];

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

  return (
    <header id="navbar">
      <nav className="navigation">
        {navItems.map(item => (
          <a 
            key={item}
            href={`#${item.toLowerCase()}`}
            onMouseEnter={() => handleMouseEnter(item)}
            onMouseLeave={handleMouseLeave}
          >
            <span className="text-wrapper">
              {(hoverText[item] || item).split('').map((char, index) => (
                <span key={index} className="char">
                  {char === '*' ? encryptChar() : char}
                </span>
              ))}
            </span>
          </a>
        ))}
      </nav>
    </header>
  );
};

*/
