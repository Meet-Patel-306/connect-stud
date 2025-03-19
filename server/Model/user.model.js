const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  googleId: { type: String, unique: true, sparse: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNo: { type: String },
  dateOfBirth: { type: Date },
  country: { type: String },
  gender: { type: String },
  alumni: { type: Boolean, default: false },
  jobtitle: { type: String },
  biography: { type: String },
  primaryLanguage: { type: String },
  languages: [{ type: String }],
  instagram: { type: String },
  linkedin: { type: String },
  github: { type: String },
  portfolio: { type: String },
  skills: [{ type: String }],
  colleges: [
    {
      college: { type: String },
      startYear: { type: String },
      endYear: { type: String },
      course: { type: String },
    },
  ],
  experiences: [
    {
      company: { type: String },
      startJobYear: { type: String },
      endJobYear: { type: String },
      jobInfo: { type: String },
    },
  ],
});

// Add passport-local-mongoose plugin to the schema
userSchema.plugin(passportLocalMongoose, { usernameField: "email" });

// Create the Mongoose model based on the schema
const User = mongoose.model("User", userSchema);

module.exports = User;
