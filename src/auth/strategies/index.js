const createGoogleStrategy = require('./google');
const createLocalStrategy = require('./local');

const initializeStrategies = (passport) => {
  const createStrategies = [
    createGoogleStrategy,
    createLocalStrategy
  ];

  createStrategies.map((createStrategy) => {
    const strategy = createStrategy(passport);
    passport.use(strategy);
  });

  return passport;
};

module.exports = initializeStrategies;
