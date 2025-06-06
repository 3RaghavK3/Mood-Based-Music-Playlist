import { PlayerContext } from '../../context/PlayerContext.jsx';
import { useContext } from 'react';

export function AudioPlayer() {
  const { setIsPlayed, audioRef, setcurrentsong } = useContext(PlayerContext);

  const checkended = () => {
    if (audioRef.current.ended) {
      setIsPlayed(false);
      setcurrentsong(null);
    }
  };
  return <audio ref={audioRef} src={null} hidden onTimeUpdate={checkended} />;
}
