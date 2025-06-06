import { useParams } from 'react-router-dom';
import '../../pages/SongsPage.css';
import { useEffect } from 'react';
import { AudioPlayer } from './AudioPlayer';

export function DetailsContainer({ playlist }) {
  const { mood } = useParams();

  const taglines = {
    Happy: 'These songs smile with you',
    Sad: 'Tunes to soothe the soul',
    Chill: 'Relax and unwind with these vibes',
    Focus: 'Music to sharpen your mind',
    Energetic: 'Boost your energy with these beats',
  };

  const buttoncontainers = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  };

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        margin: `0 auto`,
        marginBottom: '15px',
        width: '100%',
        border: '5px solid black',
        height: '200px',
        backgroundColor: `var(--details-color)`,
      }}
    >
      <div
        style={{
          flex: 2,
          height: '100%',
        }}
      >
        <div
          className="mood-info"
          style={{
            padding: 0,
            fontFamily: `'Baloo Thambi 2', system-ui`,
            fontSize: '5rem',
            fontWeight: 800,
            color: 'var(--text-color)',
          }}
        >
          MOOD:{mood.toUpperCase()}
        </div>

        <div
          className="mood-description"
          style={{
            fontFamily: `"Bellota", system-ui`,
            fontSize: '2rem',
            color: 'var(--text-color)',
          }}
        >
          {taglines[mood]}
        </div>
      </div>

      <div
        className="playlist-area"
        style={{
          flex: 1,
          display: 'flex',
          right: '1%',
          border: '1px solid black',
          height: '75%',
          margin: 'auto 25px',
          backgroundColor: `var(--songsCard-color)`,
        }}
      >
        <div className="playlist-song-details" style={{ flex: 2 }}>
          <div
            style={{
              fontFamily: `'Advent Pro', sans-serif`,
              fontWeight: 700,
              fontSize: '2rem',
            }}
          >
            {playlist.title}
          </div>
        </div>

        <AudioPlayer />

        <div
          className="playlist-pic"
          style={{
            flex: 1,
            height: '100%',
            border: '1px solid black',
            backgroundImage: `url(${playlist.picture_xl})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right center',
          }}
        ></div>
      </div>
    </div>
  );
}
