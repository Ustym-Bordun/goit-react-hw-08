import { createSelector } from '@reduxjs/toolkit';

import { selectNameFilter } from '../filters/selectors';

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
