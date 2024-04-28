import { Link, useLocation } from 'react-router-dom';

const MovieListItem = ({ name, id }) => {
  const location = useLocation();
  return (
    <li>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {name}
      </Link>
    </li>
  );
};

export default MovieListItem;
