import { combineReducers } from 'redux';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  GET_FILTER_VALUE,
} from 'redux/contacts/contacts-types';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
];

const contacts = (state = contactsInitialState, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return state.some(({ name }) => name === payload.name)
        ? alert(`Contact ${payload.name} already exists`)
        : [payload, ...state];

    case DELETE_CONTACT:
      return state.filter(contact => contact.id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case GET_FILTER_VALUE:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  contacts,
  filter,
});