import React, { createContext, useRef, useContext,useState } from 'react';


export const FetchedMoodsContext = createContext();

export function FetchedMoodsProvider({ children }) {
 
  const fetchedMoods = useRef(new Set());
  const [songs, setSongs] = useState([]);

  return (
    <FetchedMoodsContext.Provider value={{songs,setSongs,fetchedMoods}}>
      {children}
    </FetchedMoodsContext.Provider>
  );
}
