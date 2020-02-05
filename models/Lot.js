const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LotSchema = new Schema({
  name: String,
  latitude: Number,
  longitude: Number,
  types: [String]
});

module.exports = mongoose.model("lot", LotSchema);
