import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import ProjectsPage from './components/ProjectsPage';
import Connect from './components/Connect';
import SoundControl from './components/SoundControl';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="app-container">
        {loading ? (
          <Loader />
        ) : (
          <>
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<ProjectsPage />} />
                <Route path="/connect" element={<Connect />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <SoundControl />
          </>
        )}
      </div>
    </Router>
  );
};

export default App;