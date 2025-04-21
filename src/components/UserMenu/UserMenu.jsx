import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectIsAuthLoading, selectUser } from '../../redux/auth/selectors';

import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  const { name } = useSelector(selectUser);
  const isAuthLoading = useSelector(selectIsAuthLoading);

  return (
    <div className={css.wrapper}>
      <div className={css.text}>Hallo {name}</div>
      <button
        className={css.btn}
        type="button"
        onClick={handleLogout}
        disabled={isAuthLoading}
      >
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
