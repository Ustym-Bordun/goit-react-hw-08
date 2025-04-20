import { Field, Form, Formik } from 'formik';
import { nanoid } from 'nanoid';

import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

import Container from '../../components/Container/Container';
import Section from '../../components/Section/Section';

import css from './RegistrationPage.module.css';

const initialValues = { name: '', email: '', password: '' };

const RegistrationPage = () => {
  const formId = nanoid();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );

    actions.resetForm();
  };

  return (
    <>
      <Section>
        <Container>
          <div className={css.wrapper}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              <Form className={css.form} autoComplete="off">
                <div className={css.inputsPart}>
                  <div className={css.labelFieldWrapper}>
                    <label className={css.label} htmlFor={`name-${formId}`}>
                      Name :
                    </label>
                    <Field
                      className={css.input}
                      type="text"
                      name="name"
                      id={`name-${formId}`}
                    ></Field>
                  </div>
                  <div className={css.labelFieldWrapper}>
                    <label className={css.label} htmlFor={`email-${formId}`}>
                      Email :
                    </label>
                    <Field
                      className={css.input}
                      type="email"
                      name="email"
                      id={`email-${formId}`}
                    ></Field>
                  </div>

                  <div className={css.labelFieldWrapper}>
                    <label
                      className={css.label}
                      htmlFor={`password-${formId}`}
                    >
                      Password :
                    </label>
                    <Field
                      className={css.input}
                      type="text"
                      name="password"
                      id={`password-${formId}`}
                    ></Field>
                  </div>
                </div>

                <button className={css.btn} type="submit">
                  Register
                </button>
              </Form>
            </Formik>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default RegistrationPage;
