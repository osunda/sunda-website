import React from 'react';
import './ProjectsPage.css';

const ProjectCard = ({ title, description, link, logo }) => (
  <div className="project-card">
    <div className="project-header">
      {logo && <img src={logo} alt={`${title} logo`} className="project-logo" />}
      <h2>{title}</h2>
    </div>
    <p>{description}</p>
    <a href={link} className="try-it-out">try it out</a>
  </div>
);

const ProjectsPage = () => {
  const projects = [
    {
      title: "StockSense",
      description: "A Python based tool that provides a risk-based rating for your stock portfolio.",
      link: "#",
      logo: "/ss.png"  // Add this line
    },
    {
      title: "...",
      description: "...",
      link: "#"
    },
    {
      title: "...",
      description: "...",
      link: "#"
    }
  ];

  return (
    <div className="projects-page">
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;