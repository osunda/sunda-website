
import React from 'react';
import Navbar from './components/Navbar.jsx';
import IntroSection from './components/IntroSection.jsx';
import Loader from './components/Loader.jsx';
import './App.css';

const App = () => {
  return (
    <div>
      <Loader />
      <Navbar />
      <IntroSection />
    </div>
  );
};

export default App;
