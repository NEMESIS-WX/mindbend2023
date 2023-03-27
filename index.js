const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const cp = require("cookie-parser");
const multer = require("multer");
const middle = require("./multer.js");
const PORT = process.env.PORT || 8080;

// import events from data.js
const { events, workshops, team, guest, expo } = require("./assets/js/data.js");
const formData = require("./schemas/formData.js");
const ExpoData = require("./schemas/expo.js");
const { addRefCode, createDb2Connection } = require("./schemas/referral.js");

app.set("view engine", "ejs");
app.use(bodyparser.json({ limit: "50mb" }));
app.use(
  bodyparser.urlencoded({
    extended: true,
    parameterLimit: 1000000,
    limit: "500mb",
  })
);
app.use(cp("secret"));

// const router = express.Router();

// Connect to db
mongoose
  .connect("mongodb://localhost:27017/MindBend")
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => console.log(err));

// second db for referrals
createDb2Connection();

// Static files
app.use(express.static("assets"));

/**
 * Base routes
 */

app.get("/", (req, res) => {
  res.render("index");
});
// guest detail fetch from data.js and send it to guests.ejs

app.get("/guest", (req, res) => {
  res.render("guest", { guest: guest });
});

app.get("/guest/:ename", (req, res) => {
  res.render("guests", {
    guests: guest.filter(function (e) {
      if (e.name === req.params.ename) {
        return e;
      }
    })[0],
  });
});

app.get("/events", (req, res) => {
  res.render("events", { events: events });
});
app.post("/guest_registration_page", (req, res, next) => {
  res.redirect("/guest_registration");
});

app.get("/events/:ename", (req, res) => {
  res.render("event", {
    event: events.filter(function (e) {
      if (e.name === req.params.ename) {
        return e;
      }
    })[0],
  });
});

app.get("/workshops", (req, res) => {
  res.render("workshops", { workshops: workshops });
});

app.get("/workshops/:wname", (req, res) => {
  res.render("workshop", {
    workshop: workshops.filter(function (e) {
      if (e.name === req.params.wname) {
        return e;
      }
    })[0],
  });
});
app.post("/workshop/register", async (req, res) => {
  console.log("evenet registration route");
  console.log(req.body);
  const data = new formData({
    eventName: req.body.event,
    name: req.body.name,
    email: req.body.email,
    phoneNo: req.body.phoneNo,
    svnitian: req.body.svnitian === "true" ? true : false,
    rollNo: req.body.rollNo,
    college: req.body.college,
    fee: req.body.fee,
    upiId: req.body.upi,
    branch: req.body.branch,
    year: req.body.year,
  });
  addRefCode(req.body.referralCode);
  data.save((err, result) => {
    if (err) throw err;
    console.log(result.fee);
    if (
      result.fee === "FREE" ||
      result.fee === "free" ||
      result.fee === { $regex: "FREE" }
    ) {
      res.render("success");
    } else res.render("payment", { data: data });
  });
});

app.post("/events/register", async (req, res) => {
  const data = new formData({
    eventName: req.body.event,
    name: req.body.name,
    email: req.body.email,
    phoneNo: req.body.phoneNo,
    svnitian: req.body.svnitian === "true" ? true : false,
    rollNo: req.body.rollNo,
    college: req.body.college,
    fee: req.body.fee,
    upiId: req.body.upi,
    branch: req.body.branch,
    year: req.body.year,
  });

  addRefCode(req.body.referralCode);

  data.save((err, result) => {
    if (err) throw err;
    console.log(result.fee);
    if (
      result.fee === "FREE" ||
      result.fee === "free" ||
      result.fee === { $regex: "FREE" }
    ) {
      res.render("success");
    } else res.render("payment", { data: data });
  });

  // res.render("payment", { data: data });
});

app.get("/camAmb", (req, res) => {
  res.render("camAmb");
});

app.get("/dashboard", (req, res) => {
  res.render("dashboard", { user: req.cookies.user });
});

app.get("/team", (req, res) => {
  res.render("team", { team: team });
});

app.get("/sponsors", (req, res) => {
  res.render("sponsors");
});

app.get("/accomodation", (req, res) => {
  res.render("accomodation");
});

app.get("/accomodation/register", (req, res) => {});

app.get("/test", (req, res) => {
  res.render("test");
});

app.get("/success", (req, res) => {
  res.render("success");
});

app
  .route("/payment")
  .get((req, res) => {
    res.render("payment");
  })
  .post(middle.single("file"), (req, res, next) => {
    const data = formData.findOne({
      $and: [{ email: req.body.email }, { phoneNo: req.body.phone }],
    });
    data.exec((err, result) => {
      if (err) console.log(err);
      if (result == null) {
        res.redirect("/");
        window.reload();
      }
      console.log(result);
      result.paid = true;
      result.img = req.file.filename;
      result.save((err, check) => {
        if (err) throw err;
        console.log(check);
        res.redirect("/success");
      });
    });
  });

app.get("/guest_registration", (req, res, next) => {
  const data = {
    name: "Guests Register",
    fee: "50 rs",
  };
  res.render("guest-register", { event: data });
});

// exppo route

app.get("/expos", (req, res) => {
  // res.render("expos");
  res.render("expos", { expos: expo });
});

app.get("/startup", (req, res) => {
  //
  res.render("expo");
});

app.get("/expos/:ename", (req, res) => {
  res.render("expodetails", {
    expodetails: expo.filter(function (e) {
      if (e.name === req.params.ename) {
        return e;
      }
    })[0],
  });
});

app.post("/startup/register", async (req, res) => {
  const data = new ExpoData({
    expo: req.body.expo,
    companyname: req.body.companyname,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    website: req.body.website,
    industry: req.body.industry,
    stage: req.body.stage,
    description: req.body.description,
    market: req.body.market,
    fundstatus: req.body.fundstatus,
    teamsize: req.body.teamsize,
  }).save((err, result) => {
    if (err) throw err;
    console.log(result);
    res.redirect("/success");
  });
});

//accomodation route

app.get("/accomodation", (req, res) => {
  res.render("accomodation");
});

// Campus ambassador router
app.use("/campusAmbassador/", require("./routes/campusAmbassadorRoutes"));

// Email router
app.use("/email/", require("./routes/emailRoutes"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
