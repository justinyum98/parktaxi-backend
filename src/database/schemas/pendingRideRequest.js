const mongoose = require('mongoose');

const PendingRideRequestSchema = new mongoose.Schema({
  requester: {
    email: String,
    firstName: String,
    lastName: String
  },
  dateTime: Date,
  location: {
    lat: Number,
    lng: Number
  },
  parkingLot: {
    name: String,
    lat: Number,
    lng: Number
  },
  spotType: String
});

module.exports = PendingRideRequestSchema;
