const express = require('express');
const fetch = require('node-fetch');
const Article = require('../models/Article');
const articleController = require('../controllers/articleController');
const authController = require('../controllers/authController');

const router = express.Router();

router.get(
  '/',
  // authController.isLoggedIn,
  articleController.getArticlesBySource
);

//bbc-news,the-wall-street-journal
// DONE national-review,the-american-conservative
// msnbc,the-huffington-post
//cnn,fox-news
// const query =
//   'https://newsapi.org/v2/top-headlines?sources=the-huffington-post&apiKey=89538def8c2f4491a442110bfb92b191';

// router.get('/populateDB', (req, res) => {
//   fetch(query)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       Article.insertMany(data.articles).catch((e) => console.log(e));
//       res.send(data);
//     });
// });

module.exports = router;

//   fetch(
//     'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=' +
//       keys.newsAPIKey
//   )
