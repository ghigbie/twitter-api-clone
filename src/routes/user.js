const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send({ users: users });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
