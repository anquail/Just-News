const authController = {};

authController.isLoggedIn = (req, res, next) => {
  if (req.user) return next();
  return next({
    log: 'you must be logged in',
    status: 401,
    message: { err: 'Log in to access this resource.' },
  });
};

module.exports = authController;
