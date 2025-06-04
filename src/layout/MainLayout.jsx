import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function MainLayout({ children }) {
  return (
   <div className="main-layout" style={{
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh'
}}>

      <Header />
      {children}
      <Footer />
    </div>
  );
}
