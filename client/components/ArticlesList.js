import React, { useState, useEffect } from 'react';
const axios = require('axios');
import ArticleCard from './ArticleCard';

import articles from './articles';

export default function ArticlesList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    if (!list.length) {
      axios.get('http://localhost:5000/articles').then((response) => {
        console.log(response.data);
        setList(Object.values(response.data).flat().slice(1));
      });
    }
  });

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
