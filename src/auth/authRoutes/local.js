const { findUserByEmail, createUser } = require('../../database/dataAccess/user');
const { generateUserJWT } = require('../jwt');

const addLocalAuthRoutes = (app, passport) => {
  app.post('/login', passport.authenticate('local'), (req, res) => {
    const token = generateUserJWT(req.user);
    res.status(200).json({
      jwt: token
    });
  });

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
