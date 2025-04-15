import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectLoading,
  selectError,
  selectFilteredContacts,
} from '../redux/contactsSlice';
import { selectNameFilter } from '../redux/filtersSlice';

import { fetchContacts } from '../redux/contactsOps';

import css from './App.module.css';

import Container from '../components/Container/Container';
import Section from '../components/Section/Section';

import Heading from '../components/Heading/Heading';
import ContactForm from '../components/ContactForm/ContactForm';
import SearchBox from '../components/SearchBox/SearchBox';
import ContactList from '../components/ContactList/ContactList';
import Notification from '../components/Notification/Notification';
import { MainLoader } from '../components/Loaders/Loaders';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

function App() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const visibleContacts = useSelector(selectFilteredContacts);

  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <div className={css.wrapper}>
          <Heading title="Phonebook" bottom />

          <ContactForm />

          <SearchBox />

          {error ? (
            <ErrorMessage text={error} />
          ) : isLoading ? (
            <MainLoader />
          ) : contacts.length > 0 ? (
            visibleContacts.length > 0 ? (
              <ContactList />
            ) : (
              <Notification
                text={`No contacts by this filter:`}
                addedText={filter}
              />
            )
          ) : (
            <>
              <Notification text="You don't have any contacts saved" />
            </>
          )}
        </div>
      </Container>
    </Section>
  );
}

export default App;
