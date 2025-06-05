import { useNavigate } from 'react-router-dom';
import './Header.css';

import { useLocation } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const onHome = location.pathname == '/';
  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="Header">
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
        <span>Your library</span>
      </div>
    </div>
  );
}
