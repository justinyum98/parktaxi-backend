const { DateTimeResolver, EmailAddressResolver } = require('graphql-scalars');
const _ = require('lodash');
const { AuthenticationError } = require('apollo-server-express');
const { parkingLots, findParkingLotByName } = require('../data');
const {
  findUserByEmail,
  createUser
} = require('../../database/dataAccess/user');
const { createPendingRideRequest } = require('../../database/dataAccess/ride');
const { generateUserJWT, verifyToken } = require('../../auth/jwt');

const resolvers = {
  DateTime: DateTimeResolver,
  EmailAddress: EmailAddressResolver,
  Query: {
    parkingLots: () => {
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
    },
    requestRide: async (
      parent,
      { dateTime, location, parkingLotName, spotType },
      context
    ) => {
      const tokenHeader = context.req.headers.authorization;
      const token = _.split(tokenHeader, ' ')[1];
      if (!token) {
        throw new Error('Token not found in request.');
      }
      const { email } = verifyToken({ token });
      const user = await findUserByEmail({ email });
      if (!user) {
        throw AuthenticationError(
          'User with email address could not be found.'
        );
      }
      const parkingLot = findParkingLotByName(parkingLotName);
      return new Promise((resolve, reject) => {
        createPendingRideRequest({
          user,
          dateTime,
          location,
          parkingLot,
          spotType
        })
          .then((request) => resolve(request))
          .catch((err) => reject(err));
      });
    }
  }
};

module.exports = { resolvers };
