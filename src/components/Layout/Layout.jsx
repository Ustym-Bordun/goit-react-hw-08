import { Suspense } from 'react';

// import { useSelector } from 'react-redux';
// import { selectIsRefreshing } from '../../redux/auth/selectors';

import { PageLoader } from '../../components/Loaders/Loaders';
import AppBar from '../AppBar/AppBar';

// import css from './Layout.module.css';

const Layout = ({ children }) => {
  // const isRefreshing = useSelector(selectIsRefreshing);
  return (
    <>
      {/* {isRefreshing } */}
      <AppBar />

      <Suspense fallback={<PageLoader />}>{children}</Suspense>
    </>
  );
};

export default Layout;
