import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('phonebook/add');
const deleteContact = createAction('phonebook/delete');
const getFilterValue = createAction('filter/get');

export { addContact, deleteContact, getFilterValue };

//===========================================================
// import {
//   ADD_CONTACT,
//   DELETE_CONTACT,
//   GET_FILTER_VALUE,
// } from 'redux/contacts/contacts-types';

// const addContact = newContact => ({
//   type: ADD_CONTACT,
//   payload: newContact,
// });

// const deleteContact = contactId => ({
//   type: DELETE_CONTACT,
//   payload: contactId,
// });

// const getFilterValue = value => ({
//   type: GET_FILTER_VALUE,
//   payload: value,
// });

// export { addContact, deleteContact, getFilterValue };
