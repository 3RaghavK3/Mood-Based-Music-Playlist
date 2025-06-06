import { AppRoutes } from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import { PlayerProvider } from './context/PlayerContext';
import { LikedProvider } from './context/LikedContext';
import { FetchedMoodsProvider } from './context/FetchMoodsContext';
export function App() {
  return (
    <>
      <BrowserRouter>
      <PlayerProvider>
        <FetchedMoodsProvider>
          <LikedProvider>
        <AppRoutes />
        </LikedProvider>
        </FetchedMoodsProvider>
        </PlayerProvider>
      </BrowserRouter>
      {/* <Loading/> */}
    </>
  );
}
