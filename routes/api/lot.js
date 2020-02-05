const express = require("express");
const router = express.Router();

const Lot = require("../../models/Lot");

// NEED TO BE TESTED
router.get("/", (req, res) => {
  Lot.find().then(spot => res.json(spot));
});

module.exports = router;
