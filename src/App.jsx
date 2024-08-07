import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import PortfolioAnalyzer from './components/PortfolioAnalyzer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div style={{color: 'white'}}>  {/* Add this style to make text visible */}
        <Loader />
        <Navbar />
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/folder" element={<PortfolioAnalyzer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;