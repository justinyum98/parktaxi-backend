const express = require("express");
const router = express.Router();

const User = require("../../models/User");

// NEED TO BE TESTED
router.get("/", (req, res) => {
  User.find().then(spot => res.json(spot));
});

// NEED TO BE TESTED
router.post("/", (req, res) => {
  const newUser = new Users({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password
  });

  newUser.save().then(user => res.json(user));
});

// NEED TO BE TESTED
router.module.exports = router;
