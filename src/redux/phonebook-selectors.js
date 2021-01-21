export const getContacts = state => state.reducer.contacts;

export const getFilter = state => state.reducer.filter;

export const getVisibleContact = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};
