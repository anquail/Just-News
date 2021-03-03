import React from 'react';
import { render } from 'react-dom';

import UserProvider from './contexts/UserProvider';

import App from './components/App';

import styles from './scss/app.scss';

render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById('root')
);
