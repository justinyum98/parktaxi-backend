const { OAuth2Strategy } = require('passport-google-oauth');
const { findOrCreateUser } = require('../../database/dataAccess/user');

const createStrategy = (passport) => (
  new OAuth2Strategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  }, (accessToken, refreshToken, profile, done) => {
    const email = profile.emails[0].value;
    const firstName = profile.name.givenName;
    const lastName = profile.name.familyName;
    findOrCreateUser({ email, firstName, lastName })
      .then((user) => done(null, user))
      .catch((err) => done(err));
  })
);

module.exports = createStrategy;
