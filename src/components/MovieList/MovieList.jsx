import css from './MovieList.module.css';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({ films }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {films.map(movie => (
        <li className={css.listItem} key={movie.id}>
          <a
            className={css.linkDetails}
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            cover={movie.poster_path}
          >
            <div className={css.logo} /> {movie.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default MovieList;
