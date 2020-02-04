const { OAuth2Strategy } = require('passport-google-oauth');
const { findOrCreateUser } = require('../../database/dataAccess/user');
const _ = require('lodash');

const createStrategy = (passport) => (
  new OAuth2Strategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  }, (accessToken, refreshToken, profile, done) => {
    const email = _.get(profile, 'emails[0].value');
    const givenName = _.get(profile, 'name.givenName');
    const familyName = _.get(profile, 'name.familyName');
    findOrCreateUser({ email, givenName, familyName })
      .then((user) => done(null, user))
      .catch((err) => done(err));
  })
);

module.exports = createStrategy;
