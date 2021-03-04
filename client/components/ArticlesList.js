import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleCard from './ArticleCard';

import articles from './articles';

export default function ArticlesList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    if (!list.length) {
      axios.get('/articles').then((response) => {
        console.log(response.data);
        setList(Object.values(response.data).flat().slice(1));
      });
    }
  }, []);

  const handleSave = (article, listName) => {
    console.log(article, listName);
    axios
      .post('api/lists/' + listName, { article })
      .then((res) => console.log(res.data));
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
          handleBtnClick={handleSave}
          id={article._id}
          article={article}
          btnText="Save"
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