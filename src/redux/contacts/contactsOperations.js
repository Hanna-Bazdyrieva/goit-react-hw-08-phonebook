
import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContactApi, getContactsApi, removeContactApi } from 'services/herokuAPI';

export const getContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, {rejectWithValue}) => {
    try {
      const contacts = await getContactsApi();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { items } = getState().contacts;

      if (!items.length) return true;
      return false;
    },
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, {rejectWithValue}) => {
    try {
      const contact = await addContactApi(newContact);
      return contact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await removeContactApi(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const addContact = newContact => dispatch => {
//   dispatch(addContactRequest());

//   addContactApi(newContact)
//     .then(contact => dispatch(addContactSuccess(contact)))
//     .catch(error => dispatch(addContactError(error.message)));
// };

// export const removeContact = id => dispatch => {
//   dispatch(removeContactRequest());

//   removeContactApi(id)
//     .then(id => dispatch(removeContactSuccess(id)))
//     .catch(error => dispatch(removeContactError(error.message)));
// };

// fetchContacts - одержання масиву контактів (метод GET) запитом. Базовий тип екшену "contacts/fetchAll".
// addContact - додавання контакту (метод POST). Базовий тип екшену "contacts/addContact".
// deleteContact
