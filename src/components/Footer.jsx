import React from 'react';
import './Footer.css';
import { ReactComponent as XIcon } from '../x.svg';
import { ReactComponent as GithubIcon } from '../github.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://twitter.com/sunnnnda" target="_blank" rel="noopener noreferrer">
            <XIcon className="social-icon x-icon" />
          </a>
          <a href="https://github.com/osunda" target="_blank" rel="noopener noreferrer">
            <GithubIcon className="social-icon github-icon" />
          </a>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} Sunda. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;