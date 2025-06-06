import { useNavigate } from 'react-router-dom';
import './Header.css';

import { useLocation } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const onHome = location.pathname == '/';
  const onLibrary=location.pathname=='/user/library'

  const goToHome = () => {
    navigate('/');
  };

  const goToLibrary = () => {
    navigate('/user/library');
  };

  return (
    <div className={onHome ? 'Header' : 'SongsHeader'}>
      <span>VibeStream</span>
      <div className="options">
        <span
          onClick={!onHome ? goToHome : undefined}
          style={{
            cursor: !onHome ? 'pointer' : 'not-allowed',
          }}
        >
          Home
        </span>

        <span onClick={!onLibrary ? goToLibrary : undefined}
          style={{
            cursor: !onLibrary ? 'pointer' : 'not-allowed',
          }}>Your library</span>
      </div>
    </div>
  );
}
