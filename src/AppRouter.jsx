import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { MainLayout } from 'layouts/MainLayout'
import { MAIN_PAGES_ROUTES } from 'constants/routes'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path={MAIN_PAGES_ROUTES.HOME_PAGE} element={<Home />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};
