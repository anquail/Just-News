import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserContext from './UserContext';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const defaultUser = {
    googleId: '112065755009825382392',
    lists: [],
    __v: 0,
    _id: '603e521a40757a5d51d717a4',
  };

  useEffect(() => {
    axios.get('/api/current_user').then((response) => {
      if (response.data) {
        console.log(response.data);
        setUser(response.data);
      }
    });
  }, []);

  const { Provider } = UserContext;
  return <Provider value={defaultUser}>{children}</Provider>;
};

export default AuthProvider;
