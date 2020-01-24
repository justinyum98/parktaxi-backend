const express = require("express");
const router = express.Router();

// Todo Model
const Spot = require("../../models/Spots");

// @route   GET api/todos
// @desc    Get All Todos
// @access  Public
router.get("/", (req, res) => {
  Spot.find().then(spot => res.json(spot));
});

// @route   POST api/todos
// @desc    Create An Todo
// @access  Private
router.post("/", (req, res) => {
  const newSpot = new Spot({
    lot: req.body.lot,
    time: req.body.time,
    id: req.body.id
  });

  newSpot.save().then(spot => res.json(spot));
});

module.exports = router;
