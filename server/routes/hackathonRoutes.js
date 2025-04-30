const router = require("express").Router();
const {
  allHackathonData,
  oneHackathonData,
  postHackathon,
  joinTeam,
  createTeam,
} = require("../controllers/hackathon.controller");
const multer = require("multer");
const Hackathon = require("../Model/hackathon.model");

const upload = multer({ storage: multer.memoryStorage() });

// all hackathon data
router.get("/", allHackathonData);

// post hackathon
router.post("/post", upload.single("hackathonImageFile"), postHackathon);
router.get("/search", async (req, res) => {
  try {
    const { name, startDate, endDate, place } = req.query;
    let query = {};

    if (name) {
      query.hackathonName = { $regex: name, $options: "i" };
    }
    if (startDate) {
      query.startDate = { $gte: new Date(startDate) };
    }
    if (endDate) {
      query.endDate = { $lte: new Date(endDate) };
    }
    if (place) {
      query.hackathonLocation = { $regex: place, $options: "i" };
    }

    const hackathons = await Hackathon.find(query);
    res.json(hackathons);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});
// one hackathon data
router.get("/:id", oneHackathonData);

// create team hackathon
router.post("/:id/teamjoin", createTeam);
router.post("/:id/memberjoin", joinTeam);

module.exports = router;
