import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
//COMPONENTS
import SharedLayout from 'components/SharedLayout';

const Router = () => {
  const AsyncHomePage = lazy(() => import('../../pages/HomePage'));
  const AsyncMoviesPage = lazy(() => import('../../pages/MoviesPage'));
  const AsyncMovieDetailsPage = lazy(() =>
    import('../../pages/MovieDetailsPage')
  );
  const AsyncMovieCast = lazy(() => import('../Cast'));
  const AsyncMovieReviews = lazy(() => import('../Reviews'));

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<AsyncHomePage />} />
        <Route path="movies" element={<AsyncMoviesPage />} />
        <Route path="movies/:movieId" element={<AsyncMovieDetailsPage />}>
          <Route path="cast" element={<AsyncMovieCast />} />
          <Route path="reviews" element={<AsyncMovieReviews />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes>
  );
};

export default Router;
