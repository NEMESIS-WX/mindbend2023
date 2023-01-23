const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cp = require("cookie-parser");

const PORT = process.env.PORT || 8080;

// import events from data.js
const { events, workshops, team } = require("./assets/js/data.js");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(cp("secret"));

// Connect to db
mongoose
  .connect(
    "mongodb+srv://user1:mongopass@cluster0.dt1ew.mongodb.net/mindBend?retryWrites=true",
    { useNewURLParser: true }
  )
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => console.log(err));

// Static files
app.use(express.static("assets"));

/**
 * Base routes
 */

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/events", (req, res) => {
  res.render("events", { events: events });
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

app.get("/camAmb", (req, res) => {
  res.render("camAmb");
});

app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

app.get("/team", (req, res) => {
  res.render("team", { team: team });
});

app.get("/sponsors", (req, res) => {
  res.render("sponsors");
});

app.get("/test", (req, res) => {
  res.render("test");
});

// Campus ambassador router
app.use("/campusAmbassador/", require("./routes/campusAmbassadorRoutes"));

// Email router
app.use("/email/", require("./routes/emailRoutes"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
