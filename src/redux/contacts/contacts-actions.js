import {
  ADD_CONTACT,
  DELETE_CONTACT,
  GET_FILTER_VALUE,
} from 'redux/contacts/contacts-types';

const addContact = newContact => ({
  type: ADD_CONTACT,
  payload: newContact,
});

const deleteContact = contactId => ({
  type: DELETE_CONTACT,
  payload: contactId,
});

const getFilterValue = value => ({
  type: GET_FILTER_VALUE,
  payload: value,
});

export { addContact, deleteContact, getFilterValue };
