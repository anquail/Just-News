const Article = require('../models/Article');

const articleController = {};

articleController.getArticlesBySource = (req, res, next) => {
  const articles = { results: 0 };

  if (!req.query.id) {
    Article.find({}).then((data) => {
      data.forEach((article) => {
        const id = article.source.id;

        if (id) {
          if (!articles[id]) {
            articles.results++;
            articles[id] = [article];
          } else if (articles[id].length < 2) {
            articles.results++;
            articles[id].push(article);
          }
        }
      });

      res.locals.articles = articles;
      return next();
    });
  } else {
    Article.find({}).then((data) => {
      const sources = req.query.id;
      const total = Math.floor(16 / sources.length);

      data.forEach((article) => {
        const id = article.source.id;

        if (sources.includes(id)) {
          if (!articles[id]) {
            articles[id] = [article];
            articles.results++;
          } else if (articles[id].length < total) {
            articles[id].push(article);
            articles.results++;
          }
        }
      });

      res.locals.articles = articles;
      return next();
    });
  }
};

module.exports = articleController;