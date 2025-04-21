import Container from '../../components/Container/Container';
import Section from '../../components/Section/Section';

import LoginForm from '../../components/LoginForm/LoginForm';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuthError,
  selectIsAuthLoading,
} from '../../redux/auth/selectors';

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

import { useEffect } from 'react';
import { AuthLoader } from '../../components/Loaders/Loaders';

import { smartErrorElimination } from '../../redux/auth/operations';

import css from './LoginPage.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();

  const authError = useSelector(selectAuthError);
  const isAuthLoading = useSelector(selectIsAuthLoading);

  useEffect(() => {
    dispatch(smartErrorElimination());
  }, [dispatch]);

  return (
    <>
      <Section>
        <Container>
          <div className={css.wrapper}>
            <LoginForm />

            {isAuthLoading && (
              <div className={css.loggingWrapper}>
                <p className={css.loggingText}>Logging into your account.</p>
                <AuthLoader />
              </div>
            )}

            {authError && typeof authError === 'string' ? (
              <ErrorMessage text={authError} />
            ) : (
              authError && (
                <ErrorMessage
                  text={'Your email or password is not correct.'}
                />
              )
            )}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default LoginPage;
