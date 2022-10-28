import PropTypes from 'prop-types';

import s from './ContactForm.module.css';

function ContactForm({ titel }) {
  return (
    <section className={s.ContactForm}>
      <h1>{titel}</h1>
      <form className={s['form']}>
        <p className={s['text']}>Name</p>
        <input
          className={s['input']}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <p className={s['text']}>Numder</p>
        <input
          className={s['input']}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={s['button']} type="sumdit">
          Add contact
        </button>
      </form>
    </section>
  );
}
ContactForm.propTypes = {
  titel: PropTypes.string.isRequired,
};
export default ContactForm;
