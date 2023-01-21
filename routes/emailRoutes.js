const express = require("express");
const emailRouter = express.Router();
const nodemailer = require("nodemailer");

// Nodemailer
const transporter = new nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mindbend@svnit.ac.in",
    pass: "yqegvaeosxqijedn",
  },
});

// Email routes
emailRouter.get("/", (req, res) => {
  res.render("email", { error: null, success: null });
});

emailRouter.post("/email", (req, res) => {
  try {
    const { subject, testEmail, emailBody } = req.body;
    if (subject === "" || testEmail === "" || emailBody === "")
      throw "Please fill all required fields";
    if (req.body.broadcast === "") {
      console.log("broadcast");
    } else {
      console.log("sendTest");
      transporter.sendMail(
        {
          from: "mindbend@svnit.ac.in",
          to: testEmail,
          subject: subject,
          text: emailBody,
        },
        (err, dat) => {
          if (err) {
            console.log(err);
            throw "Could not send email";
          }
          res.render("email", { error: null, success: true });
        }
      );
    }
  } catch (e) {
    res.render("email", { error: e, success: false });
  }
});

module.exports = emailRouter;
