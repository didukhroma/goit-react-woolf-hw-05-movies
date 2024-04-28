//IMPORT
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Suspense } from 'react';
//API
import { getMovieDetails } from 'api/api';
//COMPONENTS
import MovieInfo from 'components/MovieInfo';
import Notification from 'components/Notification';
import MovieAdditionalInfo from 'components/MovieAdditionalInfo';
import Loader from 'components/Loader';
import GoBack from 'components/GoBack';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const [error, setError] = useState('');

  useEffect(() => {
    if (!movieId) return;

    getMovieDetails(movieId)
      .then(setMovie)
      .catch(({ message }) => setError(message));
  }, [movieId]);

  return (
    <>
      {error ? (
        <Notification message={error} />
      ) : (
        <>
          <GoBack />
          <MovieInfo movieData={movie} />
          <MovieAdditionalInfo />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieDetails;
