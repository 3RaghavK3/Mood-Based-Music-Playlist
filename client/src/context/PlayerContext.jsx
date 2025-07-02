import { Children, createContext, useContext, useState, useRef } from 'react';

export const PlayerContext = createContext();

export function PlayerProvider({ children }) {
  const [isPlayed, setIsPlayed] = useState(null);
  const audioRef = useRef(null);
  const [currentsongId, setcurrentsongId] = useState(null);

  return (
    <PlayerContext.Provider
      value={{ isPlayed, setIsPlayed, audioRef, currentsongId, setcurrentsongId }}
    >
      {children}
    </PlayerContext.Provider>
  );
}
