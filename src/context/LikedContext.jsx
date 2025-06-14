import { Children, createContext, useContext, useState, useRef ,useEffect} from 'react';

export const LikedContext = createContext();

export function LikedProvider({ children }) {
  const [likedsongs, setlikedsong] = useState(()=>{
       const saved=localStorage.getItem("saved-info")
       return saved  ? JSON.parse(saved ) : []
       
  });



  useEffect(()=>{localStorage.setItem("saved-info",JSON.stringify(likedsongs))},[likedsongs])
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
