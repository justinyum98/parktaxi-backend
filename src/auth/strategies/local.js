const { GraphQLLocalStrategy } = require('graphql-passport');
const { findUserByEmail } = require('../../database/dataAccess/user');

const createStrategy = () =>
  new GraphQLLocalStrategy((email, password, done) => {
    findUserByEmail({ email })
      .then((user) => {
        if (!user) return done(null, false);
        if (user.password !== password) return done(null, false);
        return done(null, user);
      })
      .catch((err) => done(err));
  });

module.exports = createStrategy;
