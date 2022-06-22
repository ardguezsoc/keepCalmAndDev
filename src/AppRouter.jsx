import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MAIN_PAGES_ROUTES } from './constants/routes';
import Home from './pages/Home';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={MAIN_PAGES_ROUTES.HOME_PAGE} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
