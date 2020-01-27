const UserModel = require('../models/user');

const findUserByEmail = ({ email }) => {
  return new Promise((resolve, reject) => {
    UserModel.findOne({ email }, (err, user) => {
      if (err) reject(err);
      resolve(user);
    });
  });
};

const createUser = ({ id, email, givenName, familyName }) => {
  return new Promise((resolve, reject) => {
    UserModel.create({ id, email, givenName, familyName }, (err, user) => {
      if (err) reject(err);
      resolve(user);
    });
  });
};

const findOrCreateUser = ({ id, email, givenName, familyName }) => {
  return new Promise((resolve, reject) => {
    findUserByEmail({ email })
      .then((user) => {
        if (!user) {
          createUser({ id, email, givenName, familyName })
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
