import axios from 'axios';

const API_KEY = '513ea5368650e4df737a18e805f764fc';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const params = {
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
};

export const getTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/day`, params);
  return response.data.results;
};

export const getDetailsMovies = async id => {
  const response = await axios.get(`/movie/${id}`, params);
  return response.data;
};
export const getMovieCast = async id => {
  const response = await axios.get(`/movie/${id}/credits`, params);
  return response.data.cast;
};

export const getMovieReviews = async id => {
  const response = await axios.get(`/movie/${id}/reviews`, params);
  return response.data.results;
};

export const getSearchMovie = async filmName => {
  const response = await axios.get(`/search/movie?${filmName}`, params);
  return response.data.results;
};
