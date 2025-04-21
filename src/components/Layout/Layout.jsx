import { Suspense } from 'react';

import { PageLoader } from '../../components/Loaders/Loaders';
import AppBar from '../AppBar/AppBar';

// import css from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />

      <Suspense fallback={<PageLoader />}>{children}</Suspense>
    </>
  );
};

export default Layout;
