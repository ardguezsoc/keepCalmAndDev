import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from 'pages/HomePage';
import { MainLayout } from 'layouts/MainLayout'
import { MAIN_PAGES_ROUTES } from 'constants/routes'
import TipsPage from 'pages/TipsPage'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path={MAIN_PAGES_ROUTES.HOME_PAGE} element={<Home />} />
          <Route path={MAIN_PAGES_ROUTES.TIPS_PAGE} element={<TipsPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};
