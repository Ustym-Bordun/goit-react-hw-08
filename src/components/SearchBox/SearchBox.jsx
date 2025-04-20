import { useId, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectNameFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';

import css from './SearchBox.module.css';

const SearchBox = () => {
  const inputId = useRef(useId()).current;

  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <label className={css.label} htmlFor={inputId}>
        Find contacts by name
      </label>
      <input
        className={css.input}
        id={inputId}
        type="text"
        value={filter}
        onChange={e => {
          const filterValue = e.target.value;
          dispatch(changeFilter(filterValue));
        }}
      />
    </div>
  );
};

export default SearchBox;
