import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import '../pages/SongsPage.css';

export function MainLayout({ children }) {
  return (
    <div
      className="main-layout"
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: 'var(--bg-color)',
      }}
    >
      <Header   />
      {children}
      <Footer />
    </div>
  );
}
