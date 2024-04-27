import { Link } from 'react-router-dom';

const MovieListItem = ({ name, id }) => {
  return (
    <li>
      <Link to={`/movies/${id}`}>{name}</Link>
    </li>
  );
};

export default MovieListItem;
