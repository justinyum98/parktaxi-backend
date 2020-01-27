const createGoogleStrategy = require('./google');

const initializeStrategies = (passport) => {
  const createStrategies = [createGoogleStrategy];

  createStrategies.map((createStrategy) => {
    const strategy = createStrategy(passport);
    passport.use(strategy);
  });

  return passport;
};

module.exports = initializeStrategies;
