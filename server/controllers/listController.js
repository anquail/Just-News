const User = require('../models/User');

const listController = {};

listController.createList = (req, res, next) => {
  const { article } = req.body;
  const articleExists = req.user.favorites.some(
    (obj) => obj.title === article.title
  );

  if (!articleExists) {
    User.findByIdAndUpdate(
      req.user.id,
      { $push: { favorites: article } },
      { new: true }
    )
      .then((res) => {
        console.log(res);
        return next();
      })
      .catch((e) => {
        return next(e);
      });
  } else {
    console.log('article already there!!!');
    return next();
  }
};

module.exports = listController;
