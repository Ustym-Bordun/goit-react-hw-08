import { NavLink } from 'react-router';
import clsx from 'clsx';

import css from './AuthNav.module.css';

const navLinkClass = ({ isActive }) =>
  clsx(css.link, isActive && css.activeLink);

const AuthNav = () => {
  return (
    <div className={css.wrapper}>
      <NavLink className={navLinkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={navLinkClass} to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
