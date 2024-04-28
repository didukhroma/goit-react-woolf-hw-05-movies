//IMPORT
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//API
import { getMovieCast } from 'api/api';
import Notification from 'components/Notification';
//SETTINGS
import { DEFAULT_IMG, IMG_URL } from 'settings/settings';
//STYLES
import styles from './Cast.module.css';

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
      {!cast.length && <p> We don't have any information about cast.</p>}
      {error && <Notification message={error} />}
      <ul>
        {cast.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <img
              className={styles.picture}
              src={profile_path ? `${IMG_URL}${profile_path}` : DEFAULT_IMG}
              alt={name}
            />
            <h4>{name}</h4>
            <p>{`Character: ${character}`}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
