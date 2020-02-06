const { findUserByEmail, createUser } = require('../../database/dataAccess/user');

const addLocalAuthRoutes = (app, passport) => {
  app.post(
    '/login',
    passport.authenticate('local', {
      // TODO: Replace with environment variables
      failureRedirect: process.env.LOCAL_LOGIN_FAILURE_URL
    }),
    (req, res) => {
      res.redirect(process.env.LOCAL_LOGIN_SUCCESS_URL);
    }
  );
  app.post('/register', (req, res) => {
    const userData = req.body;
    findUserByEmail({ email: userData.email })
      .then((user) => {
        if (user) {
          res.status(409).send('User already exists.')
        } else {
          createUser({ ...userData })
            .then((user) => {
              res.status(200).send('User successfully registered.');
            })
            .catch((err) => {
              res.status(500).send('Error when creating user:', err);
            })
        }
      })
      .catch((err) => {
        res.status(500).send('Error when finding user by email:', err);
      })
  });
};

module.exports = addLocalAuthRoutes;