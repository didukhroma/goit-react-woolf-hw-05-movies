import { Link, useParams } from 'react-router-dom';

const MovieAdditionalInfo = () => {
  const { movieId } = useParams();
  return (
    <>
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </li>
      </ul>
    </>
  );
};

export default MovieAdditionalInfo;
