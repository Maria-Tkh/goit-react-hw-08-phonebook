// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import { changeFilter } from '../../redux/contacts/contacts-actions';
// import { useState } from 'react';
import { Label } from './Filter.styled';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <Label>
      <p> Find contact by name</p>
      <input type="text" value={value} onChange={e => dispatch(changeFilter(e.target.value))} />
    </Label>
  );
};

export default Filter;
