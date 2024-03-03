var nodemailer = require("nodemailer");
require("dotenv").config();

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "___________@gmail.com",
    pass: process.env.PW,
  },
});

var mailOptions = {
  from: "___________@gmail.com",
  to: "_______________________",
  subject: "first mail using Node.js!",
  text: "That was easy-peasy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
