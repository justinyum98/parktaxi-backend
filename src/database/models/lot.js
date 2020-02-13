const mongoose = require('mongoose');
const LotSchema = require('../schemas/lot');

module.exports = mongoose.model('Lot', LotSchema);
