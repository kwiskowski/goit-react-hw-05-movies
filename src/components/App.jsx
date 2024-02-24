import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Revievs'));
const Home = lazy(() => import('./pages/Home/Home'));
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('./pages/Movies/Movies'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />

        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

// import { Routes, Route } from 'react-router-dom';
// import { SharedLayout } from './SharedLayout/SharedLayout';
// import Home from './pages/Home/Home';
// import MovieDetails from './pages/MovieDetails/MovieDetails';
// import Movies from './pages/Movies/Movies';
// import Reviews from './Reviews/Revievs';
// import Cast from './Cast/Cast';
// import css from './App.module.css';

// export const App = () => {
//   return (
//     <div className={css.appContainer}>
//       <Routes>
//         <Route path="/" element={<SharedLayout />}>
//           <Route index element={<Home />} />
//           <Route path="/movies" element={<Movies />} />
//           <Route path="/movies/:movieId" element={<MovieDetails />}>
//             <Route path="/movies/:movieId/cast" element={<Cast />} />
//             <Route path="/movies/:movieId/reviews" element={<Reviews />} />
//           </Route>
//           <Route path="*" element={<Home />} />
//         </Route>
//       </Routes>
//     </div>
//   );
// };
