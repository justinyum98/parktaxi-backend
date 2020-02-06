const UserModel = require('../models/user');

const findUserByEmail = ({ email }) => {
  return new Promise((resolve, reject) => {
    UserModel.findOne({ email }, (err, user) => {
      if (err) reject(err);
      resolve(user);
    });
  });
};

const createUser = ({ email, password, firstName, lastName }) => {
  return new Promise((resolve, reject) => {
    UserModel.create({ email, password, firstName, lastName }, (err, user) => {
      if (err) reject(err);
      resolve(user);
    });
  });
};

const findOrCreateUser = ({ email, password, firstName, lastName }) => {
  return new Promise((resolve, reject) => {
    findUserByEmail({ email })
      .then((user) => {
        if (!user) {
          createUser({ email, password, firstName, lastName })
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
