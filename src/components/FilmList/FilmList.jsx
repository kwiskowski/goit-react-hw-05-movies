import css from './FilmList.module.css';
import PropTypes from 'prop-types';

const FilmList = ({ title, onTitleClick }) => {
  return (
    <ul className={css.filmList}>
      <li></li>
    </ul>
  );
};

FilmList.propTypes = {
  title: PropTypes.string.isRequired,
  onTitleClick: PropTypes.func.isRequired,
};
