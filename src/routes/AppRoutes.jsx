import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { SongsPage } from '../pages/SongsPage';
import { Liked } from '../pages/Liked';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:mood" element={<SongsPage />} />
      <Route path="/user/library" element={<Liked />} />
    </Routes>
  );
}
