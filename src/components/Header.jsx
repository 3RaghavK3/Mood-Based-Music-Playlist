import { useNavigate } from 'react-router-dom';
import './Header.css';
import { AudioPlayer } from './SongsPage/AudioPlayer';
import { useLocation } from 'react-router-dom';
import { PlayerContext} from '../context/PlayerContext';
import { useContext } from 'react';


export function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const { isPlayed, setIsPlayed, audioRef,currentsong, setcurrentsong } =
      useContext(PlayerContext);

  const onHome = location.pathname == '/';
  const onLibrary=location.pathname=='/user/library'

  const goToHome = () => {
    navigate('/');
  };

  const goToLibrary = () => {
    navigate('/user/library');
  };


    // const clearSongHistory = () => {
    //   setcurrentsong(null);
    //   setIsPlayed(false);
    //   if (audioRef.current && audioRef.current.src != null) {
    //     audioRef.current.src = null;
    //   }
    // }


  return (
    <div className={onHome ? 'Header' : 'SongsHeader'}>
      <span>VibeStream</span>
      <div className="options">
        <span
         onClick={() => {
          if (!onHome) {
            // clearSongHistory()
            goToHome();
          
          }
          else undefined
          
        }}

          style={{
            cursor: !onHome ? 'pointer' : 'not-allowed',
          }}
        >
          Home
        </span>
       
        <span
         onClick={() => {
          if (!onLibrary) {
            // clearSongHistory()
            goToLibrary();
            
          }
          else undefined
        }}
          style={{
            cursor: !onLibrary ? 'pointer' : 'not-allowed',
          }}>Your library</span>
      </div>
    </div>
  );
}
