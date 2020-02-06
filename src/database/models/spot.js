const mongoose = require('mongoose');
const SpotSchema = require('../schemas/spot');

module.exports = mongoose.model('Spot', SpotSchema);
