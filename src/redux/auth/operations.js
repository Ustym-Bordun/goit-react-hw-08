import { createAsyncThunk } from '@reduxjs/toolkit';

// register - для реєстрації нового користувача. Базовий тип екшену "auth/register".
// Використовується у компоненті RegistrationForm на сторінці реєстрації.

// login - для логіну існуючого користувача. Базовий тип екшену "auth/login".
// Використовується у компоненті LoginForm на сторінці логіну.

// logout - для виходу з додатка. Базовий тип екшену "auth/logout".
// Використовується у компоненті UserMenu у шапці додатку.

// refreshUser - оновлення користувача за токеном. Базовий тип екшену "auth/refresh".
// Використовується у компоненті App під час його монтування.

export const register = createAsyncThunk(
  'auth/register',
  async (_, thunkAPI) => {
    try {
      // console.log('auth/register');
    } catch {
      thunkAPI.rejectWithValue();
    }
  }
);

export const login = createAsyncThunk('auth/login', async (_, thunkAPI) => {
  try {
    // console.log('auth/login');
  } catch {
    thunkAPI.rejectWithValue();
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    // console.log('auth/logout');
  } catch {
    thunkAPI.rejectWithValue();
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    try {
      // console.log('auth/refreshUser');
    } catch {
      thunkAPI.rejectWithValue();
    }
  }
);
