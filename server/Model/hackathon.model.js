const mongoose = require("mongoose");
const { Schema } = mongoose;

const hackathonSchema = new mongoose.Schema({
  hackathonName: { type: String, required: true },
  organizerName: { type: String, required: true },
  organizerEmail: { type: String, required: true },
  hackathonLocation: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  subjects: [{ type: String }],
  type: { type: String, required: true },
  teamSize: { type: Number, required: true },
  winner: { type: Number },
  firstRunnerUp: { type: Number },
  secondRunnerUp: { type: Number },
  hackathonAbout: { type: String },
  registerLink: { type: String },
  owner: { type: Schema.Types.ObjectId, ref: "User" },
});
const Hackathon = mongoose.model("Hackathon", hackathonSchema);

module.exports = Hackathon;
