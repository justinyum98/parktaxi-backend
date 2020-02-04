const passport = require('passport');
const initializeStrategies = require('./strategies');
const initializeSerialization = require('./serialize');
const initializeAuthRoutes = require('./authRoutes');

const initializeAuth = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());

  initializeStrategies(passport);
  initializeSerialization(passport);
  initializeAuthRoutes(app, passport);

  return passport;
};

module.exports = {
    initializeAuth
};
