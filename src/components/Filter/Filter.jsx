import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchContact } from '../redux/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const handleValue = evt => {
    const { value } = evt.currentTarget;
    setValue(value);

    dispatch(searchContact(value.toString()));
  };

  return (
    <>
      <p className={css.filterTitle}>Find contact by name</p>
      <input
        className={css.filterInput}
        name="text"
        type="text"
        value={value}
        onChange={handleValue}
      />
    </>
  );
};

export default Filter;
