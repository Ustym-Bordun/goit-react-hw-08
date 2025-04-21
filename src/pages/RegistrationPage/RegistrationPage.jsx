import Container from '../../components/Container/Container';
import Section from '../../components/Section/Section';

import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuthError,
  selectIsAuthLoading,
} from '../../redux/auth/selectors';

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

import { useEffect } from 'react';
import { AuthLoader } from '../../components/Loaders/Loaders';

import { smartErrorElimination } from '../../redux/auth/operations';

import css from './RegistrationPage.module.css';

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const authError = useSelector(selectAuthError);
  const isAuthLoading = useSelector(selectIsAuthLoading);

  useEffect(() => {
    dispatch(smartErrorElimination());
  }, [dispatch]);

  const isEmailValidationError =
    authError &&
    authError._message === 'User validation failed' &&
    authError.errors &&
    authError.errors.email;

  const isEmailAlreadyRegistered =
    authError && authError.keyPattern && authError.keyPattern.email === 1;

  const shouldShowGenericError =
    authError &&
    authError._message &&
    !isEmailValidationError &&
    !isEmailAlreadyRegistered;

  return (
    <>
      <Section>
        <Container>
          <div className={css.wrapper}>
            <RegistrationForm />

            {isAuthLoading && (
              <div className={css.registeringWrapper}>
                <p className={css.registeringText}>
                  Registering your account.
                </p>
                <AuthLoader />
              </div>
            )}

            {isEmailValidationError && (
              <ErrorMessage
                text={`This email: ${authError.errors.email.properties.value} is not valid.`}
              />
            )}
            {isEmailAlreadyRegistered && (
              <ErrorMessage
                text={`This email: ${authError.keyValue.email} is already registered.`}
              />
            )}
            {shouldShowGenericError && (
              <ErrorMessage text={`${authError._message}.`} />
            )}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default RegistrationPage;
