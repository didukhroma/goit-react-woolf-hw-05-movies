//IMPORT
import axios from 'axios';
//SETTINGS
import { API_KEY, BASE_URL } from 'settings/settings';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common = { Authorization: `Bearer ${API_KEY}` };

export const getTrendingMovies = async () => {
  const requestStr = 'trending/all/day?language=en-US';
  const {
    data: { results },
  } = await axios.get(requestStr);
  return results;
};

export const getMovieDetails = async movieId => {
  const requestStr = `movie/${movieId}`;
  const response = await axios.get(requestStr);
  return response.data;
};

export const getMovieCast = async movieId => {
  const requestStr = `movie/${movieId}/credits`;
  const {
    data: { cast },
  } = await axios.get(requestStr);
  return cast;
};

export const getMovieReviews = async movieId => {
  const requestStr = `movie/${movieId}/reviews`;
  const {
    data: { results },
  } = await axios.get(requestStr);
  return results;
};

export const getMovie = async query => {
  const requestStr = `search/movie?query=${query}`;
  const {
    data: { results },
  } = await axios.get(requestStr);
  return results;
};
