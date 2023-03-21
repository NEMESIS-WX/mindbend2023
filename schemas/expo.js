const mongoose = require("mongoose");

const ExpoSchema = new mongoose.Schema({

  expo: {type: String, required: true},
  companyname: { type: String, required: true},
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  phone: { type: Number, required: true},
  website: { type: String},
  industry: { type: String, required: true, trim: true},
  stage: {type: String, required: true},
  description: { type: String, trim: true},
  market: {type: String, trim: true},
  fundstatus: {type: String, trim: true},
  teamsize: {type: Number, required: true},

});

module.exports = mongoose.model("ExpoData", ExpoSchema);