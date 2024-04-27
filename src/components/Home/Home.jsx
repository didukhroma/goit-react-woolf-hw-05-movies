import { getTrendingMovies } from 'api/api';
import { useEffect, useState } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrending = async () => {
      const { results } = await getTrendingMovies();
      setMovies(results);
    };
    getTrending();
  }, []);

  console.log(movies);
  return (
    <>
      <h1>Trending today</h1>
    </>
  );
};

export default Home;
