import { Children, createContext, useContext, useState, useRef } from 'react';

export const LikedContext = createContext();

export function LikedProvider({ children }) {
  const [likedsongs, setlikedsong] = useState([]);
//   const audioRef = useRef(null);
//   const [currentsong, setcurrentsong] = useState(null);

  return (
    <LikedContext.Provider
      value={{likedsongs, setlikedsong }}
    >
      {children}
    </LikedContext.Provider>
  );
}
