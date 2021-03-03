import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserContext from './UserContext';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('/api/current_user').then((response) => {
      if (response.data) {
        console.log(response.data);
        setUser(response.data);
      }
    });
  }, []);

  const { Provider } = UserContext;
  return <Provider value={user}>{children}</Provider>;
};

export default AuthProvider;
