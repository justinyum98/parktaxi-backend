const _ = require('lodash');

const scope = [
  'profile',
  'email'
];

const addGoogleAuthRoutes = (app, passport) => {
  app.get('/auth/google', passport.authenticate('google', { scope }));
  app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    console.log('successfully authenticated via Google:', _.get(req, 'user', {}));
    res.redirect(process.env.GOOGLE_OAUTH_SUCCESS_URL);
  });
};

module.exports = addGoogleAuthRoutes;
