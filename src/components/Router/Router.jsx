import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
//COMPONENTS
import SharedLayout from 'components/SharedLayout';

const Router = () => {
  const AsyncHomePage = lazy(() => import('../../pages/HomePage'));
  const AsyncMoviesPage = lazy(() => import('../../pages/MoviesPage'));
  const AsyncMovieDetailsPage = lazy(() =>
    import('../../pages/MovieDetailsPage')
  );

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<AsyncHomePage />} />
        <Route path="movies" element={<AsyncMoviesPage />} />
        <Route path="movies/:movieId" element={<AsyncMovieDetailsPage />} />

        {/* <Route path="movies/:movieId" element={<AsyncMovieDetails />}>
          <Route index element={<AsyncMovieDetails />} />
          <Route path="cast" element={<AsyncMovieDetails />} />
          <Route path="reviews" element={<AsyncMovieDetails />} />
        </Route> */}
      </Route>
    </Routes>
  );
};

export default Router;
