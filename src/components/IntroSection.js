// src/components/IntroSection.js
import React, { useEffect, useState } from 'react';
import './IntroSection.css';

const phrases = [
  "Visualize the city of Tokyo in the year 2070.",
  "Imagine a great battle on the sea between two pirate ships.",
  "Picture a species far more advanced than the human race.",
  "Visualize our civilization if DogeCoin reached 1$.",
  "Imagine a human colony on Mars."
];

const IntroSection = () => {
  const [currentPhrase, setCurrentPhrase] = useState('');
  const [userInput, setUserInput] = useState('');
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(50); // Faster typing speed

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setCurrentPhrase(fullText.substring(0, currentPhrase.length + 1));

      if (currentPhrase === fullText) {
        setTimeout(() => {
          setCurrentPhrase('');
          setLoopNum(loopNum + 1);
        }, 2000);
      }
    };

    if (userInput === '') {
      const timer = setTimeout(() => handleTyping(), typingSpeed);
      return () => clearTimeout(timer);
    }
  }, [currentPhrase, loopNum, typingSpeed, userInput]);

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="intro-section-container">
      <h1 className="intro-title">
        One prompt away from your imagination
      </h1>
      <div className="prompt-box">
        <span className="prompt-icon">✨</span> {/* Example icon, you can use any other */}
        <input
          type="text"
          className="prompt-input"
          value={userInput}
          onChange={handleChange}
          placeholder={currentPhrase}
        />
        <button className="prompt-button">
          Generate
          <span>➔</span> {/* Example arrow icon */}
        </button>
      </div>
    </div>
  );
};

export default IntroSection;