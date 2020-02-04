const scope = [
  'profile',
  'email'
];

const addGoogleAuthRoutes = (app, passport) => {
  app.get('/auth/google', passport.authenticate('google', { scope }));
  app.get('/auth/google/callback', passport.authenticate('google', {
      successRedirect: process.env.GOOGLE_OAUTH_SUCCESS_URL,
      failureRedirect: process.env.GOOGLE_OAUTH_FAILURE_URL
  }));
};

module.exports = addGoogleAuthRoutes;
