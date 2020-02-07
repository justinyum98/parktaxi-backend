const LocalStrategy = require('passport-local').Strategy;
const { findUserByEmail } = require('../../database/dataAccess/user');

const createStrategy = () => (
  new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
    session: true
  }, (req, username, password, done) => {
    findUserByEmail({ email: username })
      .then((user) => {
        if (!user) return done(null, false);
        if (user.password != password) return done(null, false);
        return done(null, user);
      })
      .catch((err) => done(err))
  })
);

module.exports = createStrategy;
