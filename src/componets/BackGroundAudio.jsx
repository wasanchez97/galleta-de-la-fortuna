import React, { useEffect } from 'react';

const BackgroundAudio = () => {
  useEffect(() => {
    const audio = new Audio('sounds/BackGround.mp3.mp3');
    audio.loop = true;

    const playAudio = async () => {
      try {
        await audio.play();
      } catch (error) {
        console.error('Error attempting to play audio:', error);
      }
    };

    playAudio();

    
    document.addEventListener('click', playAudio);

  
    return () => {
      audio.pause();
      audio.currentTime = 0;
      document.removeEventListener('click', playAudio);
    };
  }, []);

  return null; 
};

export default BackgroundAudio;
