import { getTrendingMovies } from 'api/api';
import MovieList from 'components/MovieList/MovieList';
import Notification from 'components/Notification';
import { useEffect, useState } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getTrendingMovies()
      .then(setMovies)
      .catch(({ message }) => setError(message));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
      {error && <Notification message={error} />}
    </>
  );
};

export default Home;
