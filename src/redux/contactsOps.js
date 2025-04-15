import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://67f83d452466325443ec3844.mockapi.io/';

// fetchContacts  get    /contacts
// addContact     post   /contacts
// deleteContact  delete /contacts/:id

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch {
      return thunkApi.rejectWithValue('Pls try reloading the page.');
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkApi) => {
    try {
      const response = await axios.post('/contacts', newContact);
      return response.data;
    } catch {
      return thunkApi.rejectWithValue('Pls try reloading the page.');
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (deleteContactId, thunkApi) => {
    try {
      const response = await axios.delete(`/contacts/${deleteContactId}`);
      return response.data;
    } catch {
      return thunkApi.rejectWithValue('Pls try reloading the page.');
    }
  }
);
