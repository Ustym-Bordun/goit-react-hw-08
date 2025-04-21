import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// ? New api
axios.defaults.baseURL = 'https://connections-api.goit.global/';

// fetchContacts  get    /contacts
// addContact     post   /contacts
// deleteContact  delete /contacts/:id
// patchContact patch /contacts/:id // ? optional new thunk

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch {
      return thunkAPI.rejectWithValue('Pls try reloading the page.');
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', newContact);
      return response.data;
    } catch {
      return thunkAPI.rejectWithValue('Pls try reloading the page.');
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (deleteContactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${deleteContactId}`);
      return response.data;
    } catch {
      return thunkAPI.rejectWithValue('Pls try reloading the page.');
    }
  }
);
