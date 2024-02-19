import css from './Home.module.css';
import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'components/fetchData/fetchData';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={css.temporaryClass}>
      <h2>Trending Movies</h2>
      <div>
        {trendingMovies.length === 0 ? (
          <div count={15} style={{ height: 30, width: 300, marginTop: 15 }} />
        ) : (
          <MovieList films={trendingMovies} />
        )}
      </div>
    </div>
  );
};

export default Home;
