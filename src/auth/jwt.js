const jwt = require('jsonwebtoken');

const generateUserJWT = ({ email, firstName, lastName }) => {
  const payload = {
    email,
    firstName,
    lastName
  }
  return jwt.sign(payload, process.env.JWT_SECRET, {
    issuer: 'parktaxi',
    audience: 'user',
    expiresIn: '2h'
  });
};

module.exports = {
  generateUserJWT
};
