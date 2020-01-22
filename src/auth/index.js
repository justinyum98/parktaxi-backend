const passport = require('passport');
const initializeStrategies = require('./strategies');

const scope = [
  'profile',
  'email'
];

const initializeAuth = (app) => {
  app.use(passport.initialize());
  initializeStrategies(passport);

  passport.serializeUser((user, done) => done(null, user));
  passport.deserializeUser((user, done) => done(null, user));

  app.get('/auth/google', passport.authenticate('google', { scope }));
  app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    console.log('succesfully authenticated');
    res.redirect(process.env.GOOGLE_OAUTH_SUCCESS_URL)
  });

  return passport;
};

module.exports = {
    initializeAuth
};
