import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import contactsReduser from './contacts/slice';
import filtersReduser from './filters/slice';
import authReduser from './auth/slice';

const authPersistedReducer = persistReducer(
  {
    key: 'auth-token',
    storage,
    whitelist: ['token'],
  },
  authReduser
);

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filters: filtersReduser,
    auth: authPersistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
