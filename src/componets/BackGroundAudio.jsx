import React, { useEffect } from 'react';

const BackgroundAudio = () => {
  useEffect(() => {
    const audio = new Audio('public/sounds/BackGround.mp3.mp3');
    audio.loop = true;

    const playAudio = async () => {
      try {
        await audio.play();
      } catch (error) {
        console.error('Error attempting to play audio:', error);
      }
    };

    playAudio();

    // Intenta reproducir el audio nuevamente en caso de que el usuario interactúe
    document.addEventListener('click', playAudio);

    // Cleanup function to stop the audio when the component unmounts
    return () => {
      audio.pause();
      audio.currentTime = 0;
      document.removeEventListener('click', playAudio);
    };
  }, []);

  return null; // Este componente no renderiza nada visible
};

export default BackgroundAudio;
