import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import ProjectsPage from './components/ProjectsPage';
import Home from './components/Home';
import Connect from './components/Connect';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

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
                <Route path="/" element={<Home />} />
                <Route path="/folder" element={<ProjectsPage />} />
                <Route path="/connect" element={<Connect />} />
              </Routes>
            </main>
          </>
        )}
      </div>
    </Router>
  );
};

export default App;