import { AppRoutes } from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import { PlayerProvider } from './context/PlayerContext';
import { LikedProvider } from './context/LikedContext';
import { SongsPageProvider } from './context/SongsPageContext';
import { AudioPlayer } from './components/SongsPage/AudioPlayer';
export function App() {
  return (
    <>
      <BrowserRouter>
        <PlayerProvider>
          <SongsPageProvider>
            <LikedProvider>
              <AudioPlayer />
              <AppRoutes />
            </LikedProvider>
          </SongsPageProvider>
        </PlayerProvider>
      </BrowserRouter>
      {/* <Loading/> */}
    </>
  );
}
