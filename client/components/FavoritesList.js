import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import UserContext from '../contexts/UserContext';
import ArticleCard from './ArticleCard';

export default function ArticlesList() {
  const user = useContext(UserContext);
  console.log(user);
  const [list, setList] = useState([]);

  useEffect(() => {
    if (!list.length) {
      axios.get('/articles/' + user._id).then((response) => {
        console.log(response.data);
        setList(response.data);
      });
    }
  }, []);

  const handleRemove = (article, listName) => {
    const newList = list.filter((item) => item._id !== article._id);
    setList(newList);
    axios
      .delete('api/lists/' + article._id)
      .then((res) => console.log(res.data));
  };

  const renderCards = () => {
    if (list.length) {
      return list.map((article, i) => (
        <ArticleCard
          key={`ArticleCard-${i}`}
          handleBtnClick={handleRemove}
          article={article}
          btnText="Remove"
          favorite={null}
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
