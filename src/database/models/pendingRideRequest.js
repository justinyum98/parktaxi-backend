const mongoose = require('mongoose');
const PendingRideRequestSchema = require('../schemas/pendingRideRequest');

module.exports = mongoose.model('PendingRideRequest', PendingRideRequestSchema);
