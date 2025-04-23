const router = require("express").Router();
const {
  allHackathonData,
  oneHackathonData,
  postHackathon,
  joinTeam,
  createTeam,
} = require("../controllers/hackathon.controller");
const multer = require("multer");

const upload = multer({ storage: multer.memoryStorage() });

// all hackathon data
router.get("/", allHackathonData);

// post hackathon
router.post("/post", upload.single("hackathonImageFile"), postHackathon);

// one hackathon data
router.get("/:id", oneHackathonData);

// create team hackathon
router.post("/:id/teamjoin", createTeam);
router.post("/:id/memberjoin", joinTeam);
module.exports = router;
