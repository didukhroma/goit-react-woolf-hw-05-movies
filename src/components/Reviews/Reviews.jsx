//IMPORT
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
//SETTINGS
import { getMovieReviews } from 'api/api';
//COMPONENTS
import Notification from 'components/Notification';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!movieId) return;
    getMovieReviews(movieId)
      .then(setReviews)
      .catch(({ message }) => setError(message));
  }, [movieId]);
  return (
    <>
      {!reviews.length && <p> We don't have any reviews for this movie.</p>}
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <h4>{`Author: ${author}`}</h4>
          <p>{content}</p>
        </li>
      ))}
      {error && <Notification message={error} />}
    </>
  );
};

export default Reviews;
