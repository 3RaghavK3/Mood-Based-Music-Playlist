import { useState, useRef } from 'react';

export function PausePlay({ song }) {
  const [isPlayed, setIsPlayed] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlayed(true);
    } else {
      audioRef.current.pause();
      setIsPlayed(false);
    }
  };

  const checkended = () => {
    if (audioRef.current.ended) setIsPlayed(false);
  };

  return (
    <div
      style={{
        fontSize: '3rem',
        cursor: 'pointer',
      }}
      onClick={togglePlay}
    >
      {isPlayed ? '⏸' : '▶'}

      <audio src={song} ref={audioRef} onTimeUpdate={checkended} />
    </div>
  );
}
