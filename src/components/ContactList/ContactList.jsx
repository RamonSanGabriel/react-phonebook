import css from './ContactList.module.css';
import { CiUser, CiPhone } from 'react-icons/ci';

const ContactList = ({ handleDelete, filterContacts, contacts }) => {
  const filteredContacts = filterContacts();
  return (
    <div>
      <ul className={css.icons}>
        {filteredContacts.map((filteredContact) => (
          <li key={filteredContact.id}>
            <h4>
              <CiUser /> {filteredContact.name}
            </h4>
            <p>
              <CiPhone /> {filteredContact.number}
            </p>
            <button
              onClick={() => {
                handleDelete(id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
