import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProjectsPage from './components/ProjectsPage';
import Footer from './components/Footer';
import Blog from './components/Blog'; 
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <div className="content-wrap">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<ProjectsPage />} />
              <Route path="/Blog" element={<Blog />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;