import prevtrack from '../../assets/prevtrack.svg';
import nexttrack from '../../assets/nexttrack.svg';
import playcircle from '../../assets/Playcircle.svg';
import pausecircle from '../../assets/Pausecircle.svg';

export function Audiocontrol() {
  const buttoncontainers = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  };

  return (
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
  );
}
