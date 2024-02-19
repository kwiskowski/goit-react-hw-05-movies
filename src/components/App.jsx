import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import Home from './pages/Home/Home';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import Movies from './pages/Movies/Movies';
import Reviews from './Reviews/Revievs';
import Cast from './Cast/Cast';
import { fetchTrendingMovies } from './fetchData/fetchData';
import css from './App.module.css';
import { SearchForm } from './SearchForm/SearchForm.jsx';

fetchTrendingMovies();

export const App = () => {
  return (
    <div className={css.appContainer}>
      <SearchForm />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
