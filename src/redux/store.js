import { configureStore } from '@reduxjs/toolkit';

// import contactsReduser from './contactsSlice';
// import filtersReduser from './filtersSlice';

import contactsReduser from './contacts/slice';
import filtersReduser from './filters/slice';
import authReduser from './auth/slice';

const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filters: filtersReduser,
    auth: authReduser,
  },
});

export default store;
