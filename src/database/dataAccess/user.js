const UserModel = require('../models/user');

const findUserByEmail = ({ email }) => {
  return new Promise((resolve, reject) => {
    UserModel.findOne({ email }, (err, user) => {
      if (err) reject(err);
      resolve(user);
    });
  });
};

const createUser = ({ email, givenName, familyName }) => {
  return new Promise((resolve, reject) => {
    UserModel.create({ email, givenName, familyName }, (err, user) => {
      if (err) reject(err);
      resolve(user);
    });
  });
};

const findOrCreateUser = ({ email, givenName, familyName }) => {
  return new Promise((resolve, reject) => {
    findUserByEmail({ email })
      .then((user) => {
        if (!user) {
          createUser({ email, givenName, familyName })
            .then((user) => resolve(user))
            .catch((err) => reject(err));
        }
        resolve(user);
      })
      .catch((err) => reject(err));
  });
};

module.exports = {
    findUserByEmail,
    createUser,
    findOrCreateUser
};
