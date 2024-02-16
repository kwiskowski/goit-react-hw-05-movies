import { Outlet } from 'react-router-dom';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  return (
    <div className={css.temporaryClass}>
      MovieDetails
      <Outlet />
    </div>
  );
};

MovieDetails.propTypes = {};

export default MovieDetails;
