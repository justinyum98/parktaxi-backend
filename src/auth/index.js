const passport = require('passport');
const initializeStrategies = require('./strategies');

const initializeAuth = (app) => {
  initializeStrategies(passport);
  app.use(passport.initialize());

  return passport;
};

module.exports = {
  initializeAuth
};
