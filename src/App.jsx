import { AppRoutes } from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';

export function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      {/* <Loading/> */}
    </>
  );
}
