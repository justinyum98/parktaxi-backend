const express = require('express');
const router = express.Router();
const { findAllLots } = require('../../database/dataAccess/lot');

// @route   GET api/lots
// @desc    Get All Lots
// @access  Public
router.get('/', (req, res) => {
  findAllLots()
    .then((lots) => {
      res.json(lots);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
