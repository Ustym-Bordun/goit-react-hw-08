import { lazy } from 'react';
import { Route, Routes } from 'react-router';

import Layout from '../components/Layout/Layout';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegistrationPage = lazy(
  () => import('../pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

// import css from './App.module.css';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />

          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Layout>
    </>
  );
}

export default App;
