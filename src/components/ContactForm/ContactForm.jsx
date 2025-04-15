import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { nanoid } from 'nanoid';

import { useDispatch } from 'react-redux';
// import { addContact } from '../../redux/contactsSlice';
import { addContact } from '../../redux/contactsOps';

import css from './ContactForm.module.css';

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short !')
    .max(50, 'Too Long !')
    .required('Required !'),
  number: Yup.string()
    .matches(/[0-9,-]/, 'Incorrect number !')
    .min(7, 'Too Short !')
    .max(50, 'Too Long !')
    .required('Required !'),
});

const initialValues = { name: '', number: '' };

const ContactForm = () => {
  const formId = nanoid();

  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          dispatch(
            addContact({
              name: values.name,
              number: values.number,
            })
          );

          actions.resetForm();
        }}
        validationSchema={formSchema}
      >
        <Form className={css.form}>
          <div className={css.inputsPart}>
            <div className={css.wrapper}>
              <label className={css.label} htmlFor={`name-${formId}`}>
                Name
              </label>
              <Field
                className={css.input}
                type="text"
                name="name"
                id={`name-${formId}`}
              />
              <ErrorMessage
                className={css.validation}
                name="name"
                component="span"
              />
            </div>

            <div className={css.wrapper}>
              <label className={css.label} htmlFor={`number-${formId}`}>
                Number
              </label>
              <Field
                className={css.input}
                type="text"
                name="number"
                id={`number-${formId}`}
              />
              <ErrorMessage
                className={css.validation}
                name="number"
                component="span"
              />
            </div>
          </div>

          <button className={css.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
