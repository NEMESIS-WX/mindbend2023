const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  college: String,
  referralCode: String,
  nReferred: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;