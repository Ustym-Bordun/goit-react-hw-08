import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router';

import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../redux/auth/operations';
import { selectIsRefreshing } from '../redux/auth/selectors';

import { RefreshingPageLoader } from '../components/Loaders/Loaders';
import Layout from '../components/Layout/Layout';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegistrationPage = lazy(
  () => import('../pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

import css from './App.module.css';
import RestrictedRoute from '../components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <div className={css.loaderWrapper}>
          <p className={css.text}>Refreshing user data.</p>
          <p className={css.text}>Please wait.</p>
          <RefreshingPageLoader />
        </div>
      ) : (
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  component={<ContactsPage />}
                  redirectTo="/login"
                />
              }
            />

            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={<RegistrationPage />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  component={<LoginPage />}
                  redirectTo="/contacts"
                />
              }
            />
            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </Layout>
      )}
    </>
  );
}

export default App;
