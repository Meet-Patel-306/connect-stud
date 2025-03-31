const mongoose = require("mongoose");
const { Schema } = mongoose;

const teamSchema = new mongoose.Schema({
  hackathon: { type: Schema.Types.ObjectId, ref: "Hackathon" },
  name: { type: String, required: true, unique: true },
  leader: { type: Schema.Types.ObjectId, ref: "User" },
  member: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
