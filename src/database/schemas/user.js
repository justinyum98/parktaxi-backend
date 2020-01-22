const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: String,
  givenName: String,
  familyName: String
});

module.exports = UserSchema;
