const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  title: {
    lot: String,
    time: Date,
    id: String
  }
});

module.exports = Item = mongoose.model("item", ItemSchema);
