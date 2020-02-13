const LotModel = require('../models/lot');

const findAllLots = () => {
  return new Promise((resolve, reject) => {
    LotModel.find({}, (err, lots) => {
      if (err) reject(err);
      resolve(lots);
    });
  });
};

module.exports = {
  findAllLots
};
