const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const PORT = process.env.PORT || 3001;
const app = express();

app.get("/tweets", (req, res) => {
  res.status(200).send({ message: "sanity check" });
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
