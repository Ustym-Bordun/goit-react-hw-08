import clsx from 'clsx';
import { NavLink } from 'react-router';

import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

import css from './Navigation.module.css';

const navLinkClass = ({ isActive }) =>
  clsx(css.link, isActive && css.activeLink);

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.wrapper}>
      <NavLink className={navLinkClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={navLinkClass} to="/contacts">
          Contacts
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
