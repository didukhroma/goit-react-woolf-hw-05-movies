//IMPORT
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//API
import { getMovieCast } from 'api/api';
import Notification from 'components/Notification';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!movieId) return;
    getMovieCast(movieId)
      .then(setCast)
      .catch(({ message }) => setError(message));
  }, [movieId]);

  return (
    <>
      <h3>Cast</h3>
      {error && <Notification message={error} />}
      <ul>
        {cast.map(({ id, name, character }) => (
          <li key={id}>
            <h4>{name}</h4>
            <p>{`Character: ${character}`}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
