const cors = require("cors");

const initializeCors = () => {
  // TODO: Add whitelist again in the future.
  // const whitelist = process.env.CORS_WHITELIST.split(',');
  // const corsOptions = {
  //   origin: (origin, callback) => {
  //     if (whitelist.indexOf(origin) !== -1 || !origin) {
  //       callback(null, true);
  //     } else {
  //       callback(new Error("Not allowed by CORS"));
  //     }
  //   }
  // };'

  // return cors(corsOptions);

  return cors();
};

module.exports = {
  initializeCors
};
