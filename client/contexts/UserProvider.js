import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserContext from './UserContext';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const defaultUser = {
    googleId: '112065755009825382392',
    favorites: [
      {
        author: 'BBC News',
        content:
          'image copyrightGetty Images The White House physician to US presidents Barack Obama and Donald Trump has denied allegations that he drank on the job.Ronny Jackson, a medical doctor and former US N… [+2204 chars]',
        description:
          'Ronny Jackson, congressman and former doctor to US presidents, has disputed a report alleging misdeeds',
        publishedAt: '2021-03-03T19:07:26.8582488Z',
        source: { id: 'bbc-news', name: 'BBC News' },
        title:
          "Ronny Jackson: Ex-White House doctor denies 'drinking on the job'",
        url: 'http://www.bbc.co.uk/news/world-us-canada-56272569',
        urlToImage:
          'https://ichef.bbci.co.uk/news/1024/branded_news/1290F/production/_117374067_jackson.jpg',
        __v: 0,
        _id: '603fe91fa4f089b26c04b4e8',
      },
    ],
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
  return <Provider value={user}>{children}</Provider>;
};

export default AuthProvider;
