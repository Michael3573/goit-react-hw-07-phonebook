import { useDispatch } from 'react-redux';
import { changeFilter } from 'Redux/filterSlice';
import style from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChangeFilter = evt => {
    dispatch(changeFilter(evt.currentTarget.value));
  };

  return (
    <label>
      <input
        className={style.serch}
        type="text"
        name="filter"
        onChange={handleChangeFilter}
        placeholder="Find contact by name"
      />
    </label>
  );
};
