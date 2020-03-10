const jwt = require('jsonwebtoken');
const { AuthenticationError } = require('apollo-server-express');

const generateUserJWT = ({ email, firstName, lastName }) => {
  const payload = {
    email,
    firstName,
    lastName
  };
  return jwt.sign(payload, process.env.JWT_SECRET, {
    issuer: 'parktaxi',
    audience: 'user',
    expiresIn: '2h'
  });
};

const handleJWTError = ({ err }) => {
  if (err.name === 'TokenExpiredError') {
    return new AuthenticationError(
      `TokenExpiredError: ${err.message} at ${err.expiredAt}`
    );
  }
  if (err.name === 'JsonWebTokenError') {
    return new AuthenticationError(`JsonWebTokenError: ${err.message}`);
  }
  if (err.name === 'NotBeforeError') {
    return new AuthenticationError(
      `NotBeforeError: ${err.message} until ${err.date}`
    );
  }
  return new AuthenticationError('UnknownJWTError');
};

const verifyToken = ({ token }) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET, {
      issuer: 'parktaxi',
      audience: 'user'
    });
  } catch (err) {
    throw handleJWTError({ err });
  }
};

module.exports = {
  generateUserJWT,
  verifyToken
};
