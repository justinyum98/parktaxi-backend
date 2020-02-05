const express = require("express");
const router = express.Router();

const Spot = require("../../models/Spot");

// NEED TO BE TESTED
router.get("/", (req, res) => {
  Spot.find().then(spot => res.json(spot));
});

// NEED TO BE TESTED
router.post("/", (req, res) => {
  const newSpot = new Spot({
    lot: req.body.lot,
    time: req.body.time,
    id: req.body.id
  });

  newSpot.save().then(spot => res.json(spot));
});

// NEED TO BE TESTED
router.delete("/:id", (req, res) => {
  Spot.findById(req.params.id)
    .then(spot => spot.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
