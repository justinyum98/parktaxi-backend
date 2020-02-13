const mongoose = require('mongoose');

const LotSchema = new mongoose.Schema({
  name: String,
  lat: Number,
  lng: Number
});

module.exports = LotSchema;
