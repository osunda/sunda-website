import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProjectsPage from './components/ProjectsPage';
import Connect from './components/Connect';
import SoundControl from './components/SoundControl';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<ProjectsPage />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <SoundControl />
      </div>
    </Router>
  );
};

export default App;