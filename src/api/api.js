import axios from 'axios';
import { API_KEY, BASE_URL } from 'settings/settings';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common = { Authorization: `Bearer ${API_KEY}` };

export const getTrendingMovies = async () => {
  const requestStr = 'trending/all/day?language=en-US';
  const response = await axios.get(requestStr);
  return response.data;
};
