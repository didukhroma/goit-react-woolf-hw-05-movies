import MovieListItem from 'components/MovieListItem';

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ original_name, original_title, name, id }) => (
        <MovieListItem
          key={id}
          id={id}
          name={name || original_name || original_title}
        />
      ))}
    </ul>
  );
};

export default MovieList;
