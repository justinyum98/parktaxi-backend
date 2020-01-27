const { OAuth2Strategy } = require('passport-google-oauth');
const { findOrCreateUser } = require('../../database/dataAccess/user');

const createStrategy = (passport) => (
  new OAuth2Strategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  }, (accessToken, refreshToken, profile, done) => {
    const id = profile.id;
    const email = profile.emails[0].value;
    const givenName = profile.name.givenName;
    const familyName = profile.name.familyName;
    findOrCreateUser({ id, email, givenName, familyName })
      .then((user) => done(null, user))
      .catch((err) => done(err));
  })
);

module.exports = createStrategy;
