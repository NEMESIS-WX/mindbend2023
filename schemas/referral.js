const mongoose = require("mongoose");

let db2;
async function createDb2Connection() {
  db2 = await mongoose.createConnection(
    "mongodb://localhost:27017/referrals",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  db2.on("connected", () => {
    console.log(
      "referrals db connected to database:",
      db2.db.databaseName,
      "host",
      db2.host
    );
  });

  db2.on("error", (error) => {
    console.error("referrals db connection error:", error);
  });

  return db2;
}

const ReferralSchema = new mongoose.Schema({
  referralCode: { type: String, unique: true },
  referralCount: { type: Number, default: 0 },
});

async function addRefCode(code) {
  try {
    const RefCode = db2.model("RefCode", ReferralSchema);
    let referral = await RefCode.findOne({ referralCode: code });
    if (!referral) {
      referral = new RefCode({ referralCode: code });
    } else {
      referral.referralCount++;
    }
    await referral.save();
    console.log("saved");
  } catch (error) {
    console.error("addRefCode error:", error);
  }
}

module.exports = {
  createDb2Connection,
  addRefCode,
};
