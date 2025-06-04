import { useState } from 'react';

export function PausePlay() {
  const [isplayed, setplayed] = useState(false);

  return (
    <div
      style={{
        fontSize: '3rem',
        cursor: 'pointer',
      }}
      onClick={() => setplayed(!isplayed)}
    >
      {isplayed ? '⏸' : '▶'}
    </div>
  );
}
