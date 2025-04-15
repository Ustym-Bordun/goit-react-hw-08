import clsx from 'clsx';
import css from './Heading.module.css';

const Heading = ({ title, top, bottom }) => {
  return (
    <h1 className={clsx(css.title, top && css.top, bottom && css.bottom)}>
      {title}
    </h1>
  );
};

export default Heading;
