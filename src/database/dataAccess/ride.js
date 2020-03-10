const _ = require('lodash');
const PendingRideRequest = require('../models/pendingRideRequest');

const createPendingRideRequest = ({
  user,
  dateTime,
  location,
  parkingLot,
  spotType
}) => {
  return new Promise((resolve, reject) => {
    const requester = _.pick(user, ['email', 'firstName', 'lastName']);
    PendingRideRequest.create(
      { requester, dateTime, location, parkingLot, spotType },
      (err, request) => {
        if (err) reject(err);
        resolve(request);
      }
    );
  });
};

module.exports = {
  createPendingRideRequest
};
