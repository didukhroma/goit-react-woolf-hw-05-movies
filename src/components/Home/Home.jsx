//IMPORT
import { useEffect, useState } from 'react';
//COMPONENTS
import MovieList from 'components/MovieList';
import Notification from 'components/Notification';
//SERVICES
import { getTrendingMovies } from 'api/api';

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
