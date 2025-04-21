import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';

import 'modern-normalize';
import './index.css';

import App from './App/App';
import { BrowserRouter } from 'react-router';
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
  // </StrictMode>
);
