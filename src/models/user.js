const mongoose = require("mongoose");

const User = mongoose.model("User", {
  userName: {
    type: String,
  },
  email: {
    type: String,
  },
});

module.exports = User;
