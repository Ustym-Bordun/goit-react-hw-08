import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';

import css from './UserMenu.module.css';
import { selectUser } from '../../redux/auth/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };

  const { name } = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <div className={css.text}>Hallo {name}</div>
      <button className={css.btn} type="button" onClick={handleClick}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
