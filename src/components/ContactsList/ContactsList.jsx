import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import * as actions from 'redux/contacts/contacts-actions';
import {
  Contacts,
  ContactsItem,
  ContactsDetails,
  Button,
} from 'components/ContactsList/ContactsList.styled';

function ContactsList() {
  const contacts = useSelector(state =>
    filtredContacts(state.phonebook.contacts, state.phonebook.filter),
  );
  const dispatch = useDispatch();

  function filtredContacts(allContacts, filter) {
    const normalizeFilter = filter.toLowerCase();

    return allContacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(normalizeFilter) ||
        number.includes(normalizeFilter),
    );
  }

  return (
    <Contacts>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactsItem key={id}>
            <div>
              <ContactsDetails>
                <FaUser size={14} />
                <span>{name}</span>
              </ContactsDetails>
              <ContactsDetails>
                <FaPhoneAlt size={14} />
                <span>{number}</span>
              </ContactsDetails>
            </div>
            <Button
              type="button"
              onClick={() => dispatch(actions.deleteContact(id))}
            >
              Delete
            </Button>
          </ContactsItem>
        );
      })}
    </Contacts>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default ContactsList;
