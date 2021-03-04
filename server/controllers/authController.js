const User = require('../models/User');

const authController = {};

authController.isLoggedIn = (req, res, next) => {
  if (req.user) return next();
  return next({
    log: 'you must be logged in',
    status: 401,
    message: { err: 'Log in to access this resource.' },
  });
};

authController.getUser = (req, res, next) => {
  // if (!req.user)
  //   return next({
  //     log: 'Error in authController.getUserData',
  //     status: 401,
  //     message: { err: 'Log in to access this resource.' },
  //   });
  // console.log(req.body);
  // console.log(req.cookies);
  // console.log(req.user.id);
  // User.findById(req.user.id).then((user) => {

  // });
  return next();
};

module.exports = authController;
