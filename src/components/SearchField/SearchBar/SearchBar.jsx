import { BsSearch } from 'react-icons/bs';
import SearchForm from '../SearchForm/SearchForm';
import SearchInput from '../SearchInput/SearchInput';
import PropTypes from 'prop-types';
import css from './SearchBar.module.css';

export const SearchBar = ({ onSubmit }) => (
  <div className={css.searchBar}>
    <SearchForm onSubmit={onSubmit}>
      <SearchInput />
      <button type="submit" aria-label="search button">
        <BsSearch />
      </button>
    </SearchForm>
  </div>
);
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
