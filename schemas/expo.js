const mongoose = require("mongoose");

const ExpoSchema = new mongoose.Schema({

  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  college: { type: String, trim: true },
  expo: {type: String, required: true},
  
});

module.exports = mongoose.model("ExpoData", ExpoSchema);