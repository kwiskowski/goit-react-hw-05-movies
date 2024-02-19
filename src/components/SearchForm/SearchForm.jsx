import css from './SearchForm.module.css';
import { DebounceInput } from 'react-debounce-input';
import propTypes from 'prop-types';

export const SearchForm = ({ value, onChange }) => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form className={css.searchForm} onSubmit={handleSubmit}>
      <h2>Movie Search</h2>
      <DebounceInput
        type="text"
        debounceTimeout={500}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="type here"
      />
    </form>
  );
};

SearchForm.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
};
