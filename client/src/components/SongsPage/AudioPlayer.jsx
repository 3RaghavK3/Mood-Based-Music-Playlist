import { PlayerContext } from '../../context/PlayerContext.jsx';
import { useContext } from 'react';

export function AudioPlayer() {
  const { setIsPlayed, audioRef, setcurrentsongId } = useContext(PlayerContext);

  const checkended = () => {
    if (audioRef.current.ended) {
      setIsPlayed(false);
      setcurrentsongId(null);
    }
  };
  return <audio ref={audioRef} src={null} hidden onTimeUpdate={checkended} />;
}
