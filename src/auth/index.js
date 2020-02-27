const passport = require('passport');
const initializeStrategies = require('./strategies');

const initializeAuth = (app) => {
  app.use(passport.initialize());
  initializeStrategies(passport);

  return passport;
};

module.exports = {
  initializeAuth
};
