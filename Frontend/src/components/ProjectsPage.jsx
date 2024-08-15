import React, { useState } from 'react';
import './ProjectsPage.css';

const AboutMe = () => (
  <section className="about-me">
    <h1 className="section-title">About Me</h1>
    <p>
    Welcome! I'm Sunda, a Canadian finance student & tech enjoyer. This website serves as my digital playground,
     where I challenge myself to create innovative tools and share my ideas.
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
        <p>This intuitive application allows users to input their stock holdings and receive a risked based rating & analysis of your investments.
          The Key features include risk assessment with an overall portfolio risk score, individual stock analysis, insights on diversification across sectors and asset classes, historical performance analysis to predict future volatility, and a user-friendly interface for entering stock holdings.

</p>
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
        <p>Nothing to see here yet...</p>
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