const addGoogleAuthRoutes = require('./google');

const initializeAuthRoutes = (app, passport) => {
  addGoogleAuthRoutes(app, passport);

  return { app, passport }
};

module.exports = initializeAuthRoutes;
