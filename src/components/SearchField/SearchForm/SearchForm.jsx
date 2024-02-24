import css from './SearchForm.module.css';
import PropTypes from 'prop-types';

const SearchForm = ({ onSubmit, children }) => (
  <form className={css.searchForm} onSubmit={onSubmit}>
    {children}
  </form>
);

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
