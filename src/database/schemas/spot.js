const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
  title: {
    lot: String,
    time: Date,
    id: String
  }
});

module.exports = SpotSchema;
