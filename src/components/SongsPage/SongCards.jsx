import { audio } from 'motion/react-client';
import { Heart } from '../../assets/heartIcon';
import { PausePlay } from '../../assets/PausePlay';
import '../../pages/SongsPage.css';
import { useRef } from 'react';
export function SongCards({ title, artist, preview }) {
  const audioRef = useRef(null);

  return (
    <div
      className="song-card"
      style={{
        padding: `0px 10px 0px 10px`,
        display: 'flex',
        justifyContent: 'space-between',
        height: '75px',
        width: '100%',
        marginTop: '10px',
        border: '1px solid black',
        borderRadius: '20px',
        backgroundColor: `var(--songsCard-color)`,
      }}
    >
      <div
        className="metadata"
        style={{
          border: `1px solid black`,
          height: '100%',
          width: '250px',
        }}
      >
        <div
          style={{
            fontFamily: `'Advent Pro', sans-serif`,
            fontWeight: 700,
            fontSize: '2rem',
          }}
        >
          {title}
        </div>

        <div
          style={{
            fontFamily: `'Advent Pro', sans-serif`,
            fontSize: '1.25rem',
          }}
        >
          {artist}
        </div>
      </div>

      <div>
        <></>
      </div>
      <div
        className="options"
        style={{
          display: 'flex',
          gap: '5px',
          height: '100%',
          width: '150px',
        }}
      >
        <div
          className="wrapper-1"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}
        >
          <PausePlay song={preview} />
        </div>

        <div
          className="wrapper-2"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}
        >
          {' '}
          <Heart />
        </div>
      </div>
    </div>
  );
}
