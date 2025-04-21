import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { errorElimination } from './slice';

// register - для реєстрації нового користувача. Базовий тип екшену "auth/register".
// Використовується у компоненті RegistrationForm на сторінці реєстрації.

// login - для логіну існуючого користувача. Базовий тип екшену "auth/login".
// Використовується у компоненті LoginForm на сторінці логіну.

// logout - для виходу з додатка. Базовий тип екшену "auth/logout".
// Використовується у компоненті UserMenu у шапці додатку.

// refreshUser - оновлення користувача за токеном. Базовий тип екшену "auth/refresh".
// Використовується у компоненті App під час його монтування.

// register   post  /users/signup
// login      post  /users/login
// logout     post  /users/logout
// refresh    get   /users/current

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = token;
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    // console.log('auth/register', credentials);
    try {
      const response = await axios.post('/users/signup', credentials);
      setAuthHeader(`Bearer ${response.data.token}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    // console.log('auth/register', credentials);
    try {
      const response = await axios.post('/users/login', credentials);
      setAuthHeader(`Bearer ${response.data.token}`);
      return response.data;
    } catch {
      return thunkAPI.rejectWithValue(
        'Your email or password is not correct.'
      );
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  // console.log('auth/logout');
  await axios.post('/users/logout');
  setAuthHeader('');
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // console.log('auth/refreshUser');
    try {
      const reduxState = thunkAPI.getState();
      setAuthHeader(`Bearer ${reduxState.auth.token}`);
      const responce = await axios.get('/users/current');
      return responce.data;
    } catch {
      return thunkAPI.rejectWithValue('auth/refresh/rejected');
    }
  },
  {
    condition: (_, thunkAPI) => {
      const reduxState = thunkAPI.getState();
      return reduxState.auth.token !== null;
    },
  }
);

export const smartErrorElimination = () => (dispatch, getState) => {
  const state = getState();
  if (state.auth.authError !== null) {
    dispatch(errorElimination());
  }
};
