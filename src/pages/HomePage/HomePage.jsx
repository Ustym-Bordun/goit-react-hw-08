import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';

import Heading from '../../components/Heading/Heading';

import css from './HomePage.module.css';
import clsx from 'clsx';

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.wrapper}>
      <Section>
        <Container>
          <Heading title="Phonebook" bottom />

          {!isLoggedIn && (
            <p className={clsx(css.text, css.wellcome)}>Wellcome user</p>
          )}
          <p className={css.text}>
            Store and organize your phone numbers effortlessly. Your contacts
            — always at your fingertips.
          </p>
        </Container>
      </Section>
    </div>
  );
};

export default HomePage;
