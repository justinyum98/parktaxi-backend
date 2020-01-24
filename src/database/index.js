const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
  });

  var db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", () => {
    console.log("successfully connected to database");
  });
};

module.exports = {
  connectDatabase
};
