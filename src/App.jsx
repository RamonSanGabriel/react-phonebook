import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { ContactForm } from './components/ContactForm/ContactForm';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import css from './App.module.css';
import Filter from './components/FIlter/Filter';
import ContactList from './components/ContactList/ContactList';

export const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const savedContacts = localStorage.getItem('contacts');
  const [contacts, setContacts] = useState(
    savedContacts !== null ? JSON.parse(savedContacts) : initialContacts
  );
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    const existingContact = contacts.find(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (existingContact) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    setContacts((prevContacts) => [
      ...prevContacts,
      { id: nanoid(), ...newContact },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '' || number.trim() === '') return;

    addContact({
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    });

    // Reset form
    setName('');
    setNumber('');
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    // console.log(e.target.value);
  };
  const handleNumberChange = (e) => {
    setNumber(e.target.value);
    // console.log(e.target.value);
  };
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filterContacts = () => {
    /*   if (filter === '') {
      return contacts;
    } */
    const filterLowerCase = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterLowerCase)
    );
  };
  const handleDelete = (id) => {
    // console.log('Delete button clicked');
    const deleteContact = contacts.filter((contact) => contact.id !== id);
    setContacts(deleteContact);
  };

  return (
    <div className={css.container}>
      <Header />

      <Section title="Address Book">
        <ContactForm
          handleSubmit={handleSubmit}
          handleNameChange={handleNameChange}
          handleNumberChange={handleNumberChange}
        />
      </Section>

      <Section title="Contacts">
        <Filter
          filter={filter}
          handleFilterChange={handleFilterChange}
          setFilter={setFilter}
        />
      </Section>
      <Section title="Contacts list">
        <ul>
          <ContactList
            handleDelete={handleDelete}
            filterContacts={filterContacts}
          />
        </ul>
      </Section>
    </div>
  );
};

export default App;
