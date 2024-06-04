// src/components/AudioPlayer.js
import React, { useEffect, useRef } from 'react';

const AudioPlayer = ({ isPlaying }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2; // Set the volume to 20%
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <audio ref={audioRef} loop>
      <source src="/Ethereal.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default AudioPlayer;
