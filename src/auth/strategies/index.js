const createLocalStrategy = require('./local');

const initializeStrategies = (passport) => {
  const createStrategies = [createLocalStrategy];

  createStrategies.forEach((createStrategy) => {
    const strategy = createStrategy();
    passport.use(strategy);
  });

  return passport;
};

module.exports = initializeStrategies;
