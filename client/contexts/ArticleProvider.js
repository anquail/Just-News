import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ArticleContext from './UserContext';
import UserContext from './UserContext';

const AuthProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const user = useContext(UserContext);

  useEffect(() => {
    if (user) {
      axios.get('/articles').then((response) => {
        console.log(response.data);
        setArticles(Object.values(response.data).flat().slice(1));
      });
      axios.get('/articles/' + user._id).then((response) => {
        // console.log(response.data);
        setFavorites(response.data);
      });
    }
  }, []);

  const { Provider } = ArticleContext;
  return (
    <Provider value={{ articles, setArticles, favorites, setFavorites }}>
      {children}
    </Provider>
  );
};

export default AuthProvider;
