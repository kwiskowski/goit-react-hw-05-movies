import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { getTrending } from 'components/fetchData/fetchData';
import { Loader } from 'components/Loader/Loader';
import css from './Home.module.css';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTrending().then(data => {
      setTrendMovies(data.results);
      setIsLoading(false);
    });
  }, []);

  return (
    <main>
      <h1>Top Movies for today</h1>
      <ul className={css.movieList}>
        {trendMovies.map(movie => (
          <li key={movie.id}>
            <Link
              className={css.movieLink}
              to={`/movies/${movie.id}`}
              state={{ from: location }}
            >
              {movie.original_title || movie.name}
            </Link>
          </li>
        ))}
        {isLoading && <Loader />}
      </ul>
    </main>
  );
};
export default Home;

// import css from './Home.module.css';
// import React, { useEffect, useState } from 'react';
// import { fetchTrendingMovies } from 'components/fetchData/fetchData';
// import MovieList from 'components/MovieList/MovieList';

// const Home = () => {
//   const [trendingMovies, setTrendingMovies] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const movies = await fetchTrendingMovies();
//         setTrendingMovies(movies);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className={css.temporaryClass}>
//       <h2>Trending Movies</h2>
//       <div>
//         {trendingMovies.length === 0 ? (
//           <div count={15} style={{ height: 30, width: 300, marginTop: 15 }} />
//         ) : (
//           <MovieList films={trendingMovies} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;
