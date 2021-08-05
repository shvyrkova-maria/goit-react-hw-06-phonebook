import PropTypes from 'prop-types';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import { connect } from 'react-redux';
import * as actions from 'redux/contacts/contacts-actions';
import {
  Contacts,
  ContactsItem,
  ContactsDetails,
  Button,
} from 'components/ContactsList/ContactsList.styled';

function ContactsList({ contacts, onDeleteClick }) {
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
            <Button type="button" onClick={() => onDeleteClick(id)}>
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
  onDeleteClick: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const { contacts, filter } = state.phonebook;
  const normalizeFilter = filter.toLowerCase();
  return {
    contacts: contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(normalizeFilter) ||
        number.includes(normalizeFilter),
    ),
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteClick: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
