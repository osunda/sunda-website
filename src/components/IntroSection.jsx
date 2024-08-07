import React, { useEffect, useState } from 'react';
import './IntroSection.css';

const phrases = [
  "If you could be an animal, what would it be?",
  "What are your skill sets?",
  "Where can I get in contact with you?",
  "Do you have any previous projects?",
  "How long have you been in the Web 3 space?",
];

const IntroSection = () => {
  const [currentPhrase, setCurrentPhrase] = useState('');
  const [userInput, setUserInput] = useState('');
  const [loopNum, setLoopNum] = useState(0);
  const typingSpeed = 50; // Faster typing speed, removed setTypingSpeed

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
        Ask me anything about myself, literally
      </h1>
      <div className="prompt-box">
        <span className="prompt-icon">✨</span>
        <input
          type="text"
          className="prompt-input"
          value={userInput}
          onChange={handleChange}
          placeholder={currentPhrase}
        />
        <button className="prompt-button">
          ➔
        </button>
      </div>
    </div>
  );
};

export default IntroSection;
