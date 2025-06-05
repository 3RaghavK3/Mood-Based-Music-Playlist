import prevtrack from '../../assets/prevtrack.svg';
import nexttrack from '../../assets/nexttrack.svg';
import playcircle from '../../assets/Playcircle.svg';
import pausecircle from '../../assets/Pausecircle.svg';
import { useParams } from 'react-router-dom';
import '../../pages/SongsPage.css';
import { useEffect } from 'react';

export function DetailsContainer() {
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
        height: '150px',
        backgroundColor: `var(--details-color)`,
      }}
    >
      <div
        style={{
          flex: 2,
          height: '100%',
          border: '1px solid black',
        }}
      >
        <div
          className="mood-info"
          style={{
            padding: 0,
            border: `1px solid black`,
            fontFamily: `'Baloo Thambi 2', system-ui`,
            fontSize: '4rem',
            fontWeight: 800,
            color: 'var(--text-color)',
          }}
        >
          MOOD:{mood.toUpperCase()}
        </div>

        <div
          className="mood-description"
          style={{
            border: `1px solid black`,
            fontFamily: `"Bellota", system-ui`,
            fontSize: '2rem',
            color: 'var(--text-color)',
          }}
        >
          {taglines[mood]}
        </div>
      </div>

      <div
        className="preview-area"
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
        <div className="preview-song-details" style={{ flex: 1 }}>
          <div
            style={{
              fontFamily: `'Advent Pro', sans-serif`,
              fontWeight: 700,
              fontSize: '2rem',
            }}
          >
            Song Title 1
          </div>

          <div
            style={{
              fontFamily: `'Advent Pro', sans-serif`,
              fontSize: '1.25rem',
            }}
          >
            Artist 1
          </div>
        </div>

        <div className="audio-controls" style={{ flex: 1 }}>
          <div style={{ height: '100%', width: '100%', padding: '10px' }}>
            <div
              className="timeline"
              style={{
                textAlign: 'center',
                marginBottom: '10px',
              }}
            >
              dwadwadawdawd
            </div>
            <div className="audio-controller-options" style={{ display: 'flex' }}>
              <div className="previous" style={{ ...buttoncontainers, flex: 1 }}>
                <img src={prevtrack} style={{ height: '30px', width: '30px' }}></img>
              </div>
              <div className="StopResume" style={{ ...buttoncontainers, flex: 2 }}>
                <img src={pausecircle} style={{ height: '60px', width: '60px' }}></img>
              </div>
              <div className="next" style={{ ...buttoncontainers, flex: 1 }}>
                <img src={nexttrack} style={{ height: '30px', width: '30px' }}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
