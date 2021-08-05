// import { useEffect } from 'react';
import Section from 'components/Section/Section';
import ContactsForm from 'components/ContactsForm/ContactsForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import Container from 'components/Container/Container';

function App() {
  // useEffect(() => {
  //   const savedContacts = localStorage.getItem('contacts');
  //   const parsedSavedContacts = JSON.parse(savedContacts);
  //   if (parsedSavedContacts) {
  //     setContacts(parsedSavedContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <Container>
      <Section title="Phonebook">
        <ContactsForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactsList />
      </Section>
    </Container>
  );
}

export default App;
