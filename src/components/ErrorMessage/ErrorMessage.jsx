import css from './ErrorMessage.module.css';

const ErrorMessage = ({ text }) => {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>Something went wrong.</p>
      {text && <p className={css.text}>{text}</p>}
    </div>
  );
};

export default ErrorMessage;
