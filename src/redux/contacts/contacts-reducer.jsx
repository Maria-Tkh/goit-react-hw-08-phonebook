import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './contacts-actions';
import { fetchContacts, createContact, deleteContact } from './contacts-operations';

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_state, action) => action.payload.data,
  [createContact.fulfilled]: (state, { payload }) => [payload.data, ...state],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ contactId }) => contactId !== payload),
});

const isLoading = createReducer(false, {
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.rejected]: () => false,
  [createContact.fulfilled]: () => false,
  [createContact.pending]: () => true,
  [createContact.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_state, action) => action.payload,
  [fetchContacts.pending]: () => null,
  [createContact.pending]: () => null,
  [createContact.rejected]: (_state, { payload }) => payload,
  [deleteContact.pending]: () => null,
  [deleteContact.rejected]: (_state, { payload }) => payload,
});

const filter = createReducer('', {
  [changeFilter]: (_state, { payload }) => payload,
});

export default combineReducers({ filter, error, isLoading, items });
