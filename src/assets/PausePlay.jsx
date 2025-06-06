import { useState, useRef, useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext.jsx';

export function PausePlay({ song }) {
  const { isPlayed, setIsPlayed, audioRef, currentsong, setcurrentsong } =
    useContext(PlayerContext);

  const togglePlay = () => {
    if (currentsong === song) {
      if (isPlayed) {
        setIsPlayed(false);
        audioRef.current.pause();
      } else {
        setIsPlayed(true);
        audioRef.current.play();
      }
    } else {
      setcurrentsong(song);
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
      {isPlayed && currentsong == song ? '⏸' : '▶'}
    </div>
  );
}
