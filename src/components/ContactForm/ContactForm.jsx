import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export const ContactForm = ({
  handleSubmit,
  handleNameChange,
  handleNumberChange,
  name,
  number,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <p>Name:</p>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your full name"
            autoComplete="off"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
            value={name}
            onChange={handleNameChange}
            required
          />
        </label>
        <label htmlFor="number">
          <p>Phone number:</p>
          <input
            type="tel"
            name="number"
            id="number"
            placeholder="Enter your number"
            autoComplete="off"
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={handleNumberChange}
            required
          />
        </label>
        {/* Add button */}
        <div>
          <button
            className={css.contactFormBtn}
            type="submit"
            onClick={handleSubmit}
          >
            Add contact
          </button>
        </div>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleNameChange: PropTypes.func.isRequired,
  handleNumberChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};
