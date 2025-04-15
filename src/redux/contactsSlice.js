import { createSelector, createSlice } from '@reduxjs/toolkit';

import { addContact, deleteContact, fetchContacts } from './contactsOps';
import { selectNameFilter } from './filtersSlice';

const handlePending = state => {
  state.error = null;
  state.loading = true;
};
const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,

    deletingContactId: null,
    addingNewContact: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)

      .addCase(addContact.pending, state => {
        state.error = null;

        state.addingNewContact = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);

        state.addingNewContact = false;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.error = action.payload;

        state.addingNewContact = false;
      })

      .addCase(deleteContact.pending, (state, action) => {
        state.error = null;

        state.deletingContactId = action.meta.arg;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );

        state.deletingContactId = null;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.error = action.payload;

        state.deletingContactId = null;
      });
  },
});

export default slice.reducer;

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  }
);

export const selectDeletingContactId = state => state.contacts.deletingContactId;
export const selectAddingNewContact = state => state.contacts.addingNewContact;
