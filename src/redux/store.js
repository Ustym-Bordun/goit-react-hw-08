import { configureStore } from '@reduxjs/toolkit';

import contactsReduser from './contactsSlice';
import filtersReduser from './filtersSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filters: filtersReduser,
  },
});

export default store;
