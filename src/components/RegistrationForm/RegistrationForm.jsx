import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

import css from './RegistrationForm.module.css';

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short !')
    .max(30, 'Too Long !')
    .required('Required !'),
  email: Yup.string()
    .email('Invalid email format!')
    .max(30, 'Too Long !')
    .required('Required !'),
  password: Yup.string()
    .min(7, 'Too Short !')
    .max(30, 'Too Long !')
    .required('Required !'),
});

const initialValues = { name: '', email: '', password: '' };

const RegistrationForm = () => {
  const formId = nanoid();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={formSchema}
    >
      <Form
        className={css.form}
        // autoComplete="off"
      >
        <div className={css.inputsPart}>
          <div className={css.validationWrapper}>
            <div className={css.labelFieldWrapper}>
              <label className={css.label} htmlFor={`name-${formId}`}>
                Name :
              </label>
              <Field
                className={css.input}
                type="text"
                name="name"
                id={`name-${formId}`}
              />
            </div>
            <ErrorMessage
              className={css.validation}
              name="name"
              component="span"
            />
          </div>

          <div className={css.validationWrapper}>
            <div className={css.labelFieldWrapper}>
              <label className={css.label} htmlFor={`email-${formId}`}>
                Email :
              </label>
              <Field
                className={css.input}
                type="email"
                name="email"
                id={`email-${formId}`}
              />
            </div>
            <ErrorMessage
              className={css.validation}
              name="email"
              component="span"
            />
          </div>

          <div className={css.validationWrapper}>
            <div className={css.labelFieldWrapper}>
              <label className={css.label} htmlFor={`password-${formId}`}>
                Password :
              </label>
              <Field
                className={css.input}
                type="password"
                name="password"
                id={`password-${formId}`}
              />
            </div>
            <ErrorMessage
              className={css.validation}
              name="password"
              component="span"
            />
          </div>
        </div>

        <button className={css.btn} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
