import { FaPhone, FaUser } from 'react-icons/fa6';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

import { selectDeletingContactId } from '../../redux/contactsSlice';

import { DeletingContactLoader } from '../Loaders/Loaders';

import css from './Contact.module.css';

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const deletingContactId = useSelector(selectDeletingContactId);

  return (
    <div className={css.wrapper}>
      {deletingContactId === id ? (
        <DeletingContactLoader />
      ) : (
        <>
          <div className={css.info}>
            <div className={css.infoPart}>
              <FaUser className={css.icon} size={22} />
              <p className={css.text}>{name}</p>
            </div>
            <div className={css.infoPart}>
              <FaPhone className={css.icon} size={22} />
              <p className={css.text}>{number}</p>
            </div>
          </div>

          <button
            className={css.btn}
            type="button"
            onClick={e => {
              // console.log(id);
              dispatch(deleteContact(id));
              e.target.disabled = true;
            }}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default Contact;
