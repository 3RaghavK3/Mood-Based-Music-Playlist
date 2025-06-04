import { Audiocontrol } from './Audiocontrol';

export function DetailsContainer() {
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
          }}
        >
          MOOD:HAPPY
        </div>

        <div
          className="mood-description"
          style={{
            border: `1px solid black`,
            fontFamily: `"Bellota", system-ui`,
            fontSize: '2rem',
          }}
        >
          These songs smile with you
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
          <Audiocontrol />
        </div>
      </div>
    </div>
  );
}
