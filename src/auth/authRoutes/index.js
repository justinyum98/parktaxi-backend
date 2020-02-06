const addLocalAuthRoutes = require('./local');
const addGoogleAuthRoutes = require('./google');

const initializeAuthRoutes = (app, passport) => {
  addLocalAuthRoutes(app, passport);
  addGoogleAuthRoutes(app, passport);

  return { app, passport }
};

module.exports = initializeAuthRoutes;
