import axios from 'axios';
const API_KEY = '105e86e2764e983a83b38e9c7e739751';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrending = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};

export const searchMovies = async query => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return response.data;
};

export const getMovieDetails = async id => {
  const response = await axios.get(
    `movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const getMovieCredits = async id => {
  const response = await axios.get(
    `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const getReviews = async id => {
  const response = await axios.get(
    `movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data;
};

// import axios from 'axios';

// const API_KEY = '105e86e2764e983a83b38e9c7e739751';
// axios.defaults.baseURL = 'https://api.themoviedb.org/3';

// const params = {
//   params: {
//     api_key: API_KEY,
//     language: 'en-US',
//   },
// };

// export const fetchTrendingMovies = async () => {
//   const response = await axios.get(`trending/movie/day`, params);
//   return response.data.results;
// };

// export const fetchMovieDetails = async movieId => {
//   const response = await axios.get(`/movie/${movieId}`, params);
//   return response.data;
// };

// export const handleSearch = async movieName => {
//   const response = await axios.get(`/search/movie?query=${movieName}`, params);
//   return response.data.results;
// };

// export const fetchMovieCast = async movieId => {
//   const response = await axios.get(`movie/${movieId}/credits?`, params);
//   return response.data.cast;
// };

// export const fetchMovieReviews = async movieId => {
//   const response = await axios.get(`movie/${movieId}/reviews?`, params);
//   return response.data.results;
// };
