import { useState, useRef, useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext.jsx';

export function PausePlay({ id, song }) {
  const { isPlayed, setIsPlayed, audioRef, currentsongId, setcurrentsongId } =
    useContext(PlayerContext);

  const togglePlay = () => {
    if (currentsongId === id) {
      if (isPlayed) {
        setIsPlayed(false);
        audioRef.current.pause();
      } else {
        setIsPlayed(true);
        audioRef.current.play();
      }
    } else {
      setcurrentsongId(id);
      setIsPlayed(true);
      audioRef.current.src = song;
      audioRef.current.play();
    }
  };

  return (
    <div
      style={{
        fontSize: '3rem',
        cursor: 'pointer',
      }}
      onClick={togglePlay}
    >
      {isPlayed && currentsongId == id ? '⏸' : '▶'}
    </div>
  );
}
