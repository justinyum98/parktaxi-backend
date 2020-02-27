const { DateTimeResolver, EmailAddressResolver } = require('graphql-scalars');
const { parkingLots } = require('../data');
const {
  findUserByEmail,
  createUser
} = require('../../database/dataAccess/user');
const { generateUserJWT } = require('../../auth/jwt');

const resolvers = {
  DateTime: DateTimeResolver,
  EmailAddress: EmailAddressResolver,
  Query: {
    getAllParkingLots: () => {
      return parkingLots;
    }
  },
  Mutation: {
    login: async (parent, { email, password }, context) => {
      const { user } = await context.authenticate('graphql-local', {
        email,
        password
      });
      const token = generateUserJWT(user);
      return { user, token };
    },
    signup: (
      parent,
      { firstName, lastName, email, password, validSpotTypes },
      context
    ) => {
      return new Promise((resolve, reject) => {
        findUserByEmail({ email })
          .then((user) => {
            if (user) {
              reject(new Error('User with email already exists.'));
            } else {
              createUser({
                firstName,
                lastName,
                email,
                password,
                validSpotTypes
              })
                .then((newUser) => {
                  const token = generateUserJWT(newUser);
                  resolve({ user: newUser, token });
                })
                .catch((err) => reject(err));
            }
          })
          .catch((err) => reject(err));
      });
    }
  }
};

module.exports = { resolvers };
