const User = require("../Model/user.model");
const Hackathon = require("../Model/hackathon.model");
const Team = require("../Model/team.model");
const mongoose = require("mongoose");

const allHackathonData = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Default to page 1
    const limit = parseInt(req.query.limit) || 10; // Default 10 items per page
    //how many page or data need to skip
    // ex: current page is 3 and limit is 10 then (3-1)*10 = 20 data need to skip
    const skip = (page - 1) * limit;

    const hackathonData = await Hackathon.find().skip(skip).limit(limit);
    const total = await Hackathon.countDocuments();
    res.json({
      total,
      page,
      limit,
      hackathons: hackathonData,
    });
  } catch (err) {
    res.json({
      message: err?.message || "Hackathon Data Not Found from Server",
    });
  }
};

const postHackathon = async (req, res) => {
  try {
    const hackathonData = req.body.hackathonRegister;
    const existHackathon = await Hackathon.findOne({
      hackathonName: hackathonData.hackathonName,
      startDate: hackathonData.startDate,
      endDate: hackathonData.endDate,
    });
    if (existHackathon) {
      return res.status(409).json({
        message: "Hackathon with same information exists",
        register: "false",
      });
    } else {
      const newHackathon = new Hackathon({
        ...hackathonData,
        owner: hackathonData.id,
      });
      await newHackathon.save();
      res
        .status(201)
        .json({ message: "Hackathon saved successfully", register: "true" });
    }
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: err?.message || "Error registering user." });
  }
};

const oneHackathonData = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      return res
        .status(400)
        .json({ message: "Bad Request Use Vaild Hackathon Id" });
    }
    const hackathonInfo = await Hackathon.findById(id);
    if (!hackathonInfo) {
      return res.status(404).json({ message: "Hackathon Data Not Found" });
    }
    res.status(200).json({ message: hackathonInfo });
  } catch (err) {
    res.status(500).json({ message: "Something is wrong." });
  }
};

const createTeam = async (req, res) => {
  try {
    const userId = req.body.id;
    const teamName = req.body.name;
    const { id } = req.params;
    const existTeam = await Team.findOne({ name: teamName });
    //  Check if the team name is already taken
    if (existTeam) {
      return res.status(409).json({ message: "Team with same name exists" });
    }
    //vaildation of id
    if (!mongoose.isValidObjectId(id) || !mongoose.isValidObjectId(userId)) {
      return res.status(400).json({ message: "Bad Request Use Vaild Data" });
    }
    // find hackathon
    const hackathon = await Hackathon.findById(id);
    if (!hackathon) {
      return res.status(404).json({ message: "Hackathon Data Not Found" });
    }
    //find user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User Data Not Found" });
    }
    // Check if the user has already joined a team in this hackathon
    const userAlreadyInHackathon = await Team.findOne({
      hackathon: id, // Check teams in the same hackathon
      member: userId, // Check if the user is already in a team
    });
    if (userAlreadyInHackathon) {
      return res
        .status(400)
        .json({ message: "User has already joined a team in this hackathon." });
    }
    const newTeam = new Team({
      name: teamName,
      leader: userId,
      member: [userId],
      hackathon: id,
    });
    //register team in hackathon
    await newTeam.save();
    //add team in user and hackathon
    user.hackathonTeam.push(newTeam._id);
    hackathon.teams.push(newTeam._id);
    await user.save();
    await hackathon.save();
    res
      .status(201)
      .json({ message: "Successfully team register", id: newTeam._id });
  } catch (err) {
    console.log("err", err);
    res.json({ message: err });
  }
};

const joinTeam = async (req, res) => {
  try {
    const userId = req.body.id;
    const teamId = req.body.teamId;
    if (
      !mongoose.isValidObjectId(userId) ||
      !mongoose.isValidObjectId(teamId)
    ) {
      return res.status(400).json({ message: "Invalid User ID or Team ID" });
    }
    // Find the team
    const team = await Team.findById(teamId);
    if (!team) {
      return res.status(404).json({ message: "Team not found" });
    }
    // Check if the user is already a team member
    if (team.member.includes(userId)) {
      return res
        .status(400)
        .json({ message: "User already a member of this team" });
    }
    //find hackathon
    const hackathon = await Hackathon.findById(team.hackathon);
    if (!hackathon) {
      return res.status(404).json({ message: "Hackathon not found" });
    }
    //team is full
    if (team.member.length >= hackathon.teamSize) {
      return res
        .status(400)
        .json({ message: `Team is full (Max size: ${hackathon.teamSize})` });
    }
    team.member.push(userId);
    await team.save();
    res.status(200).json({ message: "You successfully join team" });
  } catch (err) {
    res.json(err?.message);
  }
};

module.exports = {
  allHackathonData,
  oneHackathonData,
  postHackathon,
  joinTeam,
  createTeam,
};
