import React, { useState } from 'react';
import './ProjectsPage.css';

const AboutMe = () => (
  <section className="about-me">
    <h1 className="section-title">About Me</h1>
    <p>
      Hi, I'm Sunda, a finance student & tech enthusiast based in Canada. The main goal of this website is 
      to push myself to build tools & applications not only for experience but for my own personal enjoyment.
    </p>
  </section>
);

const StockSenseCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`project-card ${isExpanded ? 'expanded' : ''}`} 
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="project-header">
        <img src="/ss.png" alt="StockSense logo" className="project-logo" />
        <h2>StockSense</h2>
      </div>
      <p className="project-description">A Python based tool that provides a risk-based rating for your stock portfolio.</p>
      <div className="project-details" style={{ maxHeight: isExpanded ? '1000px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease-out' }}>
        <p>StockSense uses advanced algorithms to analyze your stock portfolio and provide a comprehensive risk assessment. It takes into account factors such as market volatility, industry trends, and historical performance to give you a clear picture of your investment's risk profile.</p>
      </div>
      <a href="#" className="try-it-out" onClick={(e) => e.stopPropagation()}>try it out</a>
    </div>
  );
};

const UpcomingProjectCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`project-card ${isExpanded ? 'expanded' : ''}`} 
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="project-header">
        <img src="/signe.png" alt="Upcoming project logo" className="project-logo" />
        <h2>???</h2>
      </div>
      <p className="project-description">Coming soon! An exciting new project is in the works.</p>
      <div className="project-details" style={{ maxHeight: isExpanded ? '1000px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease-out' }}>
        <p>We're working on something big! This upcoming project will revolutionize the way you interact with financial data. Stay tuned for more information and be prepared to experience finance like never before.</p>
      </div>
      <a href="#" className="try-it-out" onClick={(e) => e.stopPropagation()}>try it out</a>
    </div>
  );
};

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <AboutMe />
      <h1 className="section-title">Projects</h1>
      <div className="projects-container">
        <StockSenseCard />
        <UpcomingProjectCard />
      </div>
    </div>
  );
};

export default ProjectsPage;