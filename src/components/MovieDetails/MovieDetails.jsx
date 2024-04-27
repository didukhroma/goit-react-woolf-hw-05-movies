//IMPORT
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//API
import { getMovieDetails } from 'api/api';
//COMPONENTS
import MovieInfo from 'components/MovieInfo';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    if (!movieId) return;

    const getDetails = async id => {
      const res = await getMovieDetails(id);
      setMovie(res);
    };

    getDetails(movieId);
  }, [movieId]);

  return (
    <>
      <MovieInfo movieData={movie} />
    </>
  );
};

export default MovieDetails;
