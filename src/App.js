import React from 'react';
import Navbar from './components/Navbar';
import IntroSection from './components/IntroSection';
import Loader from './components/Loader';
import './App.css'; // Ensure global styles are applied

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
