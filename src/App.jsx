import React from 'react';
import { createRoot } from 'react-dom/client';
import { Home } from './pages/Home';
import { Loading } from './components/Loading';
import { Header } from './components/Header';
import { DetailsContainer } from './components/PlaylistPage/detailsContainer';
import { SongCards } from './components/PlaylistPage/songCards';

export function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <Loading/> */}
      <Header />
      <div
        className="wrapper-container"
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          top: '75px',
          border: '1px solid red',
          width: '85%',
          margin: `0 auto`,
        }}
      >
        <DetailsContainer />
        <div
          style={{
            width: '100%',
            fontFamily: 'Advent Pro',
            fontSize: '2rem',
          }}
        >
          Recommended Tracks
        </div>
        <SongCards />
        <SongCards />
        <SongCards />
        <SongCards />
        <SongCards />
        <SongCards />
        <SongCards />
      </div>
    </>
  );
}
