import React, { useState } from 'react';
import './ProjectsPage.css';

// About Me component
const AboutMe = () => (
  <section className="about-me">
    <h1 className="section-title">About Me</h1>
    <p>
      Welcome! I'm Sunda, a Canadian finance student & tech enjoyer. This website serves as my digital playground,
      where I challenge myself to create innovative tools and share my ideas.
    </p>
  </section>
);

// Individual Project Card component
const ProjectCard = ({ title, logo, description, details, isExpanded, onToggle }) => {
  return (
    <div 
      className={`project-card ${isExpanded ? 'expanded' : ''}`} 
      onClick={onToggle}
    >
      <div className="project-header">
        <img src={logo} alt={`${title} logo`} className="project-logo" />
        <h2>{title}</h2>
      </div>
      <p className="project-description">
        {description}
        <span className="project-details">
          {details}
        </span>
      </p>
      <a href="#" className="try-it-out" onClick={(e) => e.stopPropagation()}>try it out</a>
    </div>
  );
};

// Main ProjectsPage component
const ProjectsPage = () => {
  // State to track which card is expanded
  const [expandedCard, setExpandedCard] = useState(null);

  // Function to handle card expansion/collapse
  const handleToggle = (cardName) => {
    setExpandedCard(prevCard => prevCard === cardName ? null : cardName);
  };

  // Project data
  const projects = [
    {
      name: 'stockSense',
      title: 'StockSense',
      logo: '/ss.png',
      description: 'A Python based tool that provides a risk-based rating for your stock portfolio',
      details: ' This intuitive application allows users to input their stock holdings and receive a risked based rating & analysis of your investments. The Key features include risk assessment with an overall portfolio risk score, individual stock analysis, insights on diversification across sectors and asset classes, historical performance analysis to predict future volatility, and a user-friendly interface for entering stock holdings.'
    },
    {
      name: 'upcomingProject',
      title: '???',
      logo: '/signe.png',
      description: 'Coming soon! An exciting new project is in the works',
      details: ' Nothing to see here yet...'
    }
  ];

  return (
    <div className="projects-page">
      <AboutMe />
      <h1 className="section-title">Projects</h1>
      <div className="projects-container">
        {projects.map(project => (
          <ProjectCard 
            key={project.name}
            title={project.title}
            logo={project.logo}
            description={project.description}
            details={project.details}
            isExpanded={expandedCard === project.name}
            onToggle={() => handleToggle(project.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage; 