const mongoose = require("mongoose");

const FormDataSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  phoneNo: { type: String, required: true, trim: true },
  svnitian: { type: Boolean, required: true, default: false },
  rollNo: { type: String, trim: true },
  fee: { type: String, trim: true },
  college: { type: String, trim: true },
  upiId: { type: String, trim: true },
  branch: { type: String, required: true, trim: true },
  year: { type: Number, required: true, trim: true },
  // uid:{type:mongoose.Schema.Types.ObjectId},
  paid: { type: Boolean, default: false },
  img: {
    type: String,
  },
});

module.exports = mongoose.model("FormData", FormDataSchema);
