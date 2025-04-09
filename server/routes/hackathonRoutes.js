const router = require("express").Router();
const {
  allHackathonData,
  oneHackathonData,
  postHackathon,
  joinTeam,
  createTeam,
} = require("../controllers/hackathon.controller");

// all hackathon data
router.get("/", allHackathonData);

// post hackathon
router.post("/post", postHackathon);

// one hackathon data
router.get("/:id", oneHackathonData);

// create team hackathon
router.post("/:id/teamjoin", createTeam);
router.post("/:id/memberjoin", joinTeam);
module.exports = router;
