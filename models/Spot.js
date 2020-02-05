const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SpotSchema = new Schema({
  spot: String,
  leave_time: Date,
  request_time: Date,
  id: String
});

module.exports = mongoose.model("spot", SpotSchema);
