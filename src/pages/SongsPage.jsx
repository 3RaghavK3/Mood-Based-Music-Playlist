import { useParams } from 'react-router-dom';
import { DetailsContainer } from '../components/SongsPage/detailsContainer';
import { SongCards } from '../components/SongsPage/songCards';
import { MainLayout } from '../layout/Mainlayout';
import { useEffect } from 'react';
import './SongsPage.css';
export function SongsPage() {
  const { mood } = useParams();
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

  const changecolors = () => {
    const colors = moodColors[mood];
    root.style.setProperty('--bg-color', colors.main);
    root.style.setProperty('--text-color', colors.detailstext);
    root.style.setProperty('--songsCard-color', colors.songcard);
    root.style.setProperty('--details-color', colors.details);
  };
  useEffect(() => {
    changecolors();
  }, [{ mood }]);

  return (
    <>
      <MainLayout>
        <div
          className="wrapper-container"
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            top: '75px',
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
      </MainLayout>
    </>
  );
}
