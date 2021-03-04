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

listController.deleteList = (req, res, next) => {
  User.findByIdAndUpdate(
    req.user.id,
    {
      $pull: { favorites: { _id: req.params.id } },
    },
    { new: true }
  )
    .then((res) => {
      return next();
    })
    .catch((e) => {
      console.log(e);
      return next(e);
    });
};

module.exports = listController;
