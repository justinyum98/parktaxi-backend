const { findUserByEmail } = require('../database/dataAccess/user');

const initializeSerialization = (passport) => {
  passport.serializeUser((user, done) => done(null, user.email));
  passport.deserializeUser((email, done) => {
    findUserByEmail({ email })
      .then((user) => done(null, user))
      .catch((err) => done(err));
  });
};

module.exports = initializeSerialization;
