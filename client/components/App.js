import React, { useContext } from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';
import UserContext from '../contexts/UserContext';

import ArticlesList from './ArticlesList';
import FavoritesList from './FavoritesList';
import NavBar from './NavBar';
import Footer from './Footer';
import LandingPage from './LandingPage';
import Checkboxes from './Checkboxes';

export default function App() {
  const user = useContext(UserContext);
  if (user) {
    return (
      <div>
        <Router history={history}>
          <NavBar />
          {/* <Checkboxes /> */}
          <Route path="/" exact component={Checkboxes} />
          <Route path="/favorites" exact component={FavoritesList} />
          {/* <ArticlesList /> */}
          <Footer />
        </Router>
      </div>
    );
  }
  return (
    <div id="landing">
      <Router history={history}>
        <NavBar />
        <LandingPage />
      </Router>
    </div>
  );
}
