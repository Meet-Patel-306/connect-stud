const nodemailer = require("nodemailer");
const path = require("path");
//.env config
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendOTPViaEmail = async (email, otp) => {
  await transporter.sendMail({
    from: `"ConnectStud" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Your OTP Code",
    html: `<p>Your OTP is: <strong>${otp}</strong>. It is valid for 10 minutes.</p>`,
  });
};
module.exports = sendOTPViaEmail;
