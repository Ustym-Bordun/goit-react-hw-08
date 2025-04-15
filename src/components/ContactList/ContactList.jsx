import { useSelector } from 'react-redux';
import {
  selectAddingNewContact,
  selectFilteredContacts,
} from '../../redux/contactsSlice';

import Contact from '../Contact/Contact';
import { AddingContactLoader } from '../Loaders/Loaders';

import css from './ContactList.module.css';

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  const addingNewContact = useSelector(selectAddingNewContact);

  return (
    <ul className={css.list}>
      {visibleContacts.map(contactData => (
        <li className={css.item} key={contactData.id}>
          <Contact contact={contactData} />
        </li>
      ))}

      {addingNewContact && (
        <li className={css.item}>
          <AddingContactLoader />
        </li>
      )}
    </ul>
  );
};

export default ContactList;
