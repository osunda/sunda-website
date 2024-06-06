import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <h2 className="logo">Monat</h2>
      <nav className="navigation">
        <a href="#documentation">Documentation</a>
        <a href="#vision">Vision</a>
        <a href="#tokenomics">Tokenomics</a>
        <a href="#discord">Discord</a>
      </nav>
      <div className="wallet-popup-wrapper">
        <button className="wallet-popup">Connect Wallet</button>
      </div>
    </header>
  );
};

export default Navbar;
