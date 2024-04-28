import { Link, useParams } from 'react-router-dom';

const MovieAdditionalInfo = () => {
  const { movieId } = useParams();
  return (
    <>
      <hr />
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </li>
      </ul>
      <hr />
    </>
  );
};

export default MovieAdditionalInfo;
