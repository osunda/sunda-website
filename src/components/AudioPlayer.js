// src/components/AudioPlayer.js
import React, { useEffect, useRef } from 'react';
import './AudioPlayer.css';

const AudioPlayer = ({ isPlaying, togglePlayPause }) => {
  const audioRef = useRef(null);
  const audioContextRef = useRef(null);
  const gainNodeRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
        const source = audioContextRef.current.createMediaElementSource(audioRef.current);
        gainNodeRef.current = audioContextRef.current.createGain();
        source.connect(gainNodeRef.current).connect(audioContextRef.current.destination);
        gainNodeRef.current.gain.value = 0.2; // Initial volume
      }
      if (isPlaying) {
        audioRef.current.play();
        fadeIn();
      } else {
        fadeOut();
      }
    }
  }, [isPlaying]);

  const fadeIn = () => {
    gainNodeRef.current.gain.cancelScheduledValues(audioContextRef.current.currentTime);
    gainNodeRef.current.gain.setValueAtTime(0, audioContextRef.current.currentTime);
    gainNodeRef.current.gain.linearRampToValueAtTime(0.2, audioContextRef.current.currentTime + 2); // 2 seconds fade-in
  };

  const fadeOut = () => {
    gainNodeRef.current.gain.cancelScheduledValues(audioContextRef.current.currentTime);
    gainNodeRef.current.gain.setValueAtTime(0.2, audioContextRef.current.currentTime);
    gainNodeRef.current.gain.linearRampToValueAtTime(0, audioContextRef.current.currentTime + 2); // 2 seconds fade-out
    setTimeout(() => {
      if (!isPlaying) {
        audioRef.current.pause();
      }
    }, 2000); // Match the fade-out duration
  };

  return (
    <div className="audio-player-container">
      <audio ref={audioRef} loop>
        <source src="/Ethereal.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className={`sound-icon ${isPlaying ? '' : 'paused'}`} onClick={togglePlayPause}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default AudioPlayer;
