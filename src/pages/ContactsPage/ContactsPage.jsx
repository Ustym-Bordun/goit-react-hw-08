import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import {
  selectContacts,
  selectLoading,
  selectError,
  selectFilteredContacts,
} from '../../redux/contacts/selectors';
import { selectNameFilter } from '../../redux/filters/selectors';

import { fetchContacts } from '../../redux/contacts/operations';

import Container from '../../components/Container/Container';
import Section from '../../components/Section/Section';

import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import Notification from '../../components/Notification/Notification';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { MainLoader } from '../../components/Loaders/Loaders';

import css from './ContactsPage.module.css';

const ContactsPage = () => {
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
    <>
      <Section>
        <Container>
          <div className={css.wrapper}>
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
    </>
  );
};

export default ContactsPage;
