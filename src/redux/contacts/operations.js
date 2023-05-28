import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContact = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await axios.get('/contacts');

  return response.data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async string => {
    const response = await axios.post('/contacts', string);

    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const response = await axios.delete(`/contacts/${id}`);

    return response.data;
  }
);
