import s from "./ContactList.module.css"

import PropTypes from 'prop-types';

function ContactList({ contacts }) {
  return (
    <ul className={s.Item}>
       {contacts.map(({ id, name, number }) => {
    return (
      <li className={s.list} key={id}>
        {name} :{number}
      </li>
    );
  })}
    </ul>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
