import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ArticleCard from './ArticleCard';
import UserContext from '../contexts/UserContext';

import articles from './articles';

export default function ArticlesList() {
  const [list, setList] = useState([]);
  const user = useContext(UserContext);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (!list.length) {
      axios.get('/articles').then((response) => {
        console.log(response.data);
        setList(Object.values(response.data).flat().slice(1));
      });
      axios.get('/articles/' + user._id).then((response) => {
        // console.log(response.data);
        setFavorites(response.data);
      });
    }
  }, []);

  const handleSave = (article, listName) => {
    console.log(article, listName);
    setFavorites([...favorites, article]);
    axios
      .post('api/lists/' + listName, { article })
      .then((res) => console.log(res.data));
  };

  const renderCards = () => {
    if (list.length) {
      return list.map((article, i) => (
        <ArticleCard
          key={`ArticleCard-${i}`}
          handleBtnClick={handleSave}
          article={article}
          btnText="Save"
          favorite={favorites.some((item) => item._id === article._id)}
        />
      ));
    }
    return null;
  };

  return (
    <div className="ArticlesList">
      <div className="ui container items">{renderCards()}</div>
    </div>
  );
}
