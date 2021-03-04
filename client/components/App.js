import React, { useContext } from 'react';
import axios from 'axios';
import UserContext from '../contexts/UserContext';

import ArticlesList from './ArticlesList';
import NavBar from './NavBar';

export default function App() {
  const user = useContext(UserContext);
  if (user) {
    return (
      <div>
        <NavBar />
        <ArticlesList />
      </div>
    );
  }
  return (
    <div>
      <NavBar />
      <h1>PLEASE LOG IN!</h1>
      <a href="/auth/google">Signin!!!</a>
    </div>
  );
}
