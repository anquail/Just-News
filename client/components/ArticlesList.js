import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ArticleCard from './ArticleCard';
import UserContext from '../contexts/UserContext';

import articles from './articles';

export default function ArticlesList({
  list,
  setList,
  user,
  favorites,
  setFavorites,
  handleSave,
}) {
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
