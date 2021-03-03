import React, { useContext } from 'react';
import axios from 'axios';
import UserContext from '../contexts/UserContext';

export default function App() {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>App!</h1>
      <h2>am i logged in? {user ? 'yes!!' : 'no!!!'}</h2>
      <a href="/auth/google">Signin!!!</a>
      <br />
      <a href="/api/current_user">get current user</a>
      <br />
      <a href="/api/logout">LOGOUT</a>
    </div>
  );
}
