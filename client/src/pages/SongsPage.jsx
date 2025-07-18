import { useParams } from 'react-router-dom';
import { DetailsContainer } from '../components/SongsPage/DetailsContainer';
import { SongCards } from '../components/SongsPage/SongCards';
import { MainLayout } from '../layout/MainLayout';
import { useEffect, useState, useRef, useContext } from 'react';
import { SongsPageContext } from '../context/SongsPageContext';

import './SongsPage.css';

export function SongsPage() {
  const { mood } = useParams();
  const { songs, setSongs, fetchedMoods, playlist, setPlaylist } = useContext(SongsPageContext);
  const [shufflepressed, setshuffle] = useState(false);
  const count = useRef(0);
  console.log(fetchedMoods);
  console.log(mood);

  const moodColors = {
    Happy: {
      main: '#FFE5B6',
      text: '#000000',
      songcard: '#D9D5A7',
      details: '#DBAC77',
    },
    Sad: {
      main: '#303150',
      detailstext: '#D8D6D6',
      songcard: '#7375A8',
      details: '#151414',
    },
    Chill: {
      main: '#AEE4F1',
      detailstext: '#000000',
      songcard: '#F2F2F2',
      details: '#47A4B9',
    },
    Energetic: {
      main: '#F8B996',
      detailstext: '#000000',
      songcard: '#F3E5D0',
      details: '#EB7979',
    },
    Focus: {
      main: '#A2C6A2',
      detailstext: '#000000',
      songcard: '#E2E8D8',
      details: '#C2DAA6',
    },
  };

  useEffect(() => {
    if (count.current == 1) return;
    if (fetchedMoods.current.has(mood) && !shufflepressed) return;
    // @ts-ignore
    fetch(`${import.meta.env.VITE_API_URL}/songs/${mood}`)
      .then((res) => res.json())
      .then((data) => {
        setSongs(data.tracksinfo);
        setPlaylist(data.playlistinfo);
        count.current = count.current + 1;
        fetchedMoods.current.add(mood);
        setshuffle(false);
      })
      .catch(console.error);
  }, [mood, shufflepressed]);

  const changecolors = () => {
    const colors = moodColors[mood];
    const root = document.documentElement;
    root.style.setProperty('--bg-color', colors.main);
    root.style.setProperty('--text-color', colors.detailstext);
    root.style.setProperty('--songsCard-color', colors.songcard);
    root.style.setProperty('--details-color', colors.details);
  };

  useEffect(() => {
    changecolors();
  }, [mood]);

  return (
    <>
      <MainLayout>
        <div
          className="wrapper-container"
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '75px',
            width: '85%',
            margin: `0 auto`,
            marginBottom: '10px',
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
            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
              <div>Recommended Tracks</div>
              <div
                onClick={() => {
                  setshuffle(true);
                  count.current = 0;
                }}
                style={{
                  backgroundColor: 'var(--details-color)',
                  color: 'var(--text-color)',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                }}
              >
                Shuffle Playlist
              </div>
            </div>

            {console.log(songs)}
          </div>

          {songs.map((song) =>
            song.preview ? (
              <SongCards
                // @ts-ignore
                key={song.id}
                id={song.id}
                title={song.title}
                artist={song.artist.name}
                preview={song.preview}
              />
            ) : null
          )}
        </div>
      </MainLayout>
    </>
  );
}
