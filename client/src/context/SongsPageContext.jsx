import React, { createContext, useRef, useContext, useState } from 'react';

export const SongsPageContext = createContext();

export function SongsPageProvider({ children }) {
  const fetchedMoods = useRef(new Set());
  const [songs, setSongs] = useState([]);
  const [playlist, setPlaylist] = useState({});

  return (
    <SongsPageContext.Provider value={{ songs, setSongs, fetchedMoods, playlist, setPlaylist }}>
      {children}
    </SongsPageContext.Provider>
  );
}
