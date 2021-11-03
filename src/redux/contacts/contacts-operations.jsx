import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk('fetchContacts', async () => {
  try {
    return await axios.get('/contacts');
  } catch (error) {
    console.log(error.message);
  }
});

export const createContact = createAsyncThunk('createContact', async contact => {
  try {
    return await axios.post('/contacts', contact);
  } catch (error) {
    console.log(error.message);
  }
});

export const deleteContact = createAsyncThunk('deleteContact', async id => {
  try {
    await axios.delete(`/contacts/${id}`);
    return id;
  } catch (error) {
    console.log(error.message);
  }
});
