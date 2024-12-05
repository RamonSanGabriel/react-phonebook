import { useState } from 'react';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
const Sample = () => {
  const savedContacts = localStorage.getItem('contacts');
  const [contacts, setContacts] = useState(
    savedContacts !== null ? JSON.parse(savedContacts) : initialContacts
  );

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleDelete = (deleteId) => {
    // console.log('Delete button clicked');
    const deleteContact = contacts.filter((contact) => contact.id !== deleteId);
    setContacts(deleteContact);
  };

  return (
    <>
      <h1>Sample JSX</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <h4>{contact.name}</h4>
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Sample;
