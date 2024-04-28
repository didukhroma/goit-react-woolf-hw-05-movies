//IMPORT
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

//API
import { getMovie } from 'api/api';

//COMPONENTS
import Form from 'components/Form';
import MovieList from 'components/MovieList';
import Notification from 'components/Notification';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  const searchQuery = searchParams.get('query');

  const handleChange = e => setQuery(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query });
    setQuery('');
  };

  useEffect(() => {
    if (!searchQuery) return;
    getMovie(searchQuery)
      .then(setMovies)
      .catch(({ message }) => setError(message));
  }, [searchQuery]);

  return (
    <>
      <Form cbOnSubmit={handleSubmit} cbOnChange={handleChange} query={query} />
      <MovieList movies={movies} />
      {error && <Notification message={error} />}
    </>
  );
};

export default Movies;
