import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
//COMPONENTS
import SharedLayout from 'components/SharedLayout';

const Router = () => {
  const AsyncHomePage = lazy(() => import('../../pages/HomePage'));
  const AsyncMoviesPage = lazy(() => import('../../pages/MoviesPage'));

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<AsyncHomePage />} />
        <Route path="movies" element={<AsyncMoviesPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
