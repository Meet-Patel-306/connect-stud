const User = require("../Model/user.model.js");
const imagekit = require("../config/imagekit.config");
const sendOTPViaEmail = require("../utils/sendOTPMail.js");
const Otp = require("../Model/otp.model");

const sendOTPForRegistration = async (req, res) => {
  try {
    // console.log(req.body); // Check if the form data is being received

    // Parse the JSON data in the "registerFormData" field
    const userData = req.body;
    // const userData = JSON.parse(req.body.registerFormData);
    // console.log(userData);
    // console.log(userData.email);
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists with this email." });
    }

    const otp = Math.floor(1000 + Math.random() * 9000).toString();

    // Remove existing OTPs for this email
    await Otp.deleteMany({ email: userData.email });

    // Save new OTP
    const newOTP = new Otp({ email: userData.email, otp });
    await newOTP.save();

    await sendOTPViaEmail(userData.email, otp);

    res
      .status(200)
      .json({ message: "OTP sent to email.", email: "userData.email" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err?.message || "Failed to send OTP." });
  }
};

const verifyAndRegisterUser = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const userData = JSON.parse(req.body.registerFormData);

    const validOtpEntry = await Otp.findOne({ email, otp });

    if (!validOtpEntry) {
      return res.status(400).json({ message: "Invalid or expired OTP." });
    }

    await Otp.deleteMany({ email });

    const baseUsername = email.split("@")[0];
    let finalUsername = baseUsername;

    const existingUsername = await User.findOne({ username: baseUsername });
    if (existingUsername) {
      finalUsername += Math.floor(Math.random() * 10000);
    }

    const password = userData.password;
    delete userData.password;

    let imageURL = "";
    if (req.file && req.file.buffer) {
      const image = await imagekit.upload({
        file: req.file.buffer,
        fileName: req.file.originalname + finalUsername,
      });
      imageURL = image.url;
    }

    const newUser = new User({
      username: finalUsername,
      ownerImage: imageURL,
      ...userData,
    });

    await User.register(newUser, password);
    res.status(201).json({ message: "Registration successful." });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: err?.message || "Error registering user." });
  }
};

module.exports = {
  sendOTPForRegistration,
  verifyAndRegisterUser,
};
