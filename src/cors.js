const cors = require("cors");

const initializeCors = () => {
  const whitelist = "localhost:3000";
  const corsOptions = {
    origin: (origin, callback) => {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    }
  };
  return cors(corsOptions);
};

module.exports = {
  initializeCors
};
