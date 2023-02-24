const express = require("express");
const campAmbaRouter = express.Router();
const User = require("../schemas/user");
const bcrypt = require("bcrypt");
const rfg = require("referral-code-generator");

const basePath = "campusAmbassador/";

// Middleware
const authenticate = async (req, res, next) => {
  if (req.signedCookies.id) {
    req.body.user = await User.findById(req.signedCookies.id);
    next();
  } else {
    res.redirect("/");
  }
};

// Routes
campAmbaRouter.get("/", (req, res) => {
  res.render("login", { error: null });
});

campAmbaRouter.post("/login", async (req, res) => {
  try {
    const usr = await User.findOne({ email: req.body.email });
    if (usr) {
      const verified = await bcrypt.compare(req.body.password, usr.password);
      if (verified) {
        res.cookie("id", usr._id.toString(), { httpOnly: true, signed: true });
        res.redirect("/campusAmbassador/dashboard");
      } else throw "Incorrect username or password";
    } else {
      throw "Email does not exists";
    }
  } catch (e) {
    res.render("login", { error: e });
  }
});

campAmbaRouter.get("/signUp", (req, res) => {
  res.render("signUp", { error: null });
});

campAmbaRouter.post("/signUp", async (req, res) => {
  try {
    const { name, email, password, confPassword, college, refCode } = req.body;
    if (
      (email === "" || name === "" || password === "" || confPassword === "",
      college === "")
    )
      throw "Please fill necessary information";
    let existUsr = await User.findOne({ email });
    if (existUsr) throw "User aleardy exists";
    if (password !== confPassword) throw new "Passwords don't match"();
    let nu = new User({
      name,
      email,
      college,
      password: await bcrypt.hash(password, 5),
      referralCode: rfg.alphaNumeric("uppercase", 5, 1),
    });
    const rUsr = await User.findOne({ referralCode: refCode });
    if (rUsr) {
      rUsr.nReferred += 1;
      await rUsr.save();
    }
    nu.save().then(() => {
      res.cookie("id", nu._id.toString(), { httpOnly: true, signed: true });
      res.redirect("/");
    });
  } catch (e) {
    console.log(e);
    res.render("signUp", { error: e });
  }
});

campAmbaRouter.get("/dashboard", authenticate, (req, res) => {
  if (req.body.user) {
    res.render("dashboard", { user: req.body.user });
  } else {
    res.redirect("/campusAmbassador/");
  }
});

campAmbaRouter.get("/logout", (req, res) => {
  if (req.signedCookies.id) {
    res.clearCookie("id", { httpOnly: true, signed: true });
  }
  res.redirect("/campusAmbassador/");
});

campAmbaRouter.get("/leaderboard", async (req, res) => {
  let ranks = await User.find({}).sort({ nReferred: -1 });
  res.render("Leaderboard", { ranks });
});

module.exports = campAmbaRouter;
