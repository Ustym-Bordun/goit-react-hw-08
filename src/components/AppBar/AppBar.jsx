import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';

import css from './AppBar.module.css';
import Container from '../Container/Container';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  // console.log(isLoggedIn);
  return (
    <header className={css.header}>
      <Container>
        <div className={css.wrapper}>
          <Navigation />

          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </Container>
    </header>
  );
};

export default AppBar;
