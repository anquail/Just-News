import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import UserContext from '../contexts/UserContext';
import ArticleCard from './ArticleCard';

export default function ArticlesList() {
  const user = useContext(UserContext);
  console.log(user);
  const [list, setList] = useState([]);

  useEffect(() => {
    if (user) {
      setList(user.favorites);
    }
  }, []);

  const handleRemove = (article, listName) => {
    console.log(article, listName);
    // axios
    //   .delete('api/lists/' + listName, { article })
    //   .then((res) => console.log(res.data));
  };

  const renderCards = () => {
    if (list.length) {
      return list.map((article, i) => (
        <ArticleCard
          key={`ArticleCard-${i}`}
          title={article.title}
          imageUrl={article.urlToImage}
          description={article.description}
          url={article.url}
          author={article.author}
          handleBtnClick={handleRemove}
          id={article._id}
          article={article}
          btnText="Remove"
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
