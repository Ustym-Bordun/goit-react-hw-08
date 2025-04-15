import clsx from 'clsx';
import css from './Notification.module.css';

const Notification = ({ text, addedText }) => {
  return (
    <div className={css.wrapper}>
      <p className={clsx(css.text, css.title)}>{text}</p>
      {addedText && (
        <p className={clsx(css.text, css.addedText)}>{addedText}</p>
      )}
    </div>
  );
};

export default Notification;
