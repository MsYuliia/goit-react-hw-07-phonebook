import { createSelector } from '@reduxjs/toolkit';
export const selectContacts = state => state.contacts.contactsItem;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilterValue = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, filterValue) => {
    if (filterValue === '') {
      return contacts;
    } else {
      const normalizeFilter = filterValue.toLowerCase();
      const filterContact = contacts.filter(({ contact }) =>
        contact.name.toLowerCase().includes(normalizeFilter)
      );
      return filterContact;
    }
  }
);
