import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshUser, register } from './operations';

const slice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,

    isAuthLoading: false,
    authError: null,
  },
  reducers: {
    errorElimination: state => {
      state.authError = null;
      // return {...state, state.authError = null;}
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.authError = null;
        state.isAuthLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isAuthLoading = false;

        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.authError = action.payload;
        state.isAuthLoading = false;
      })

      .addCase(login.pending, state => {
        state.authError = null;
        state.isAuthLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthLoading = false;

        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.authError = action.payload;
        state.isAuthLoading = false;
      })

      .addCase(logout.pending, state => {
        state.isAuthLoading = true;
      })
      .addCase(logout.fulfilled, state => {
        state.isAuthLoading = false;

        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      })

      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isRefreshing = false;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export default slice.reducer;

export const { errorElimination } = slice.actions;
