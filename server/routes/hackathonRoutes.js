const router = require("express").Router();
const Hackathon = require("../Model/hackathon.model");

// post hackathon
router.post("/post", async (req, res) => {
  try {
    const hackathonData = req.body;
    const existHackathon = await Hackathon.findOne({
      hackathonName: hackathonData.hackathonName,
      startDate: hackathonData.startDate,
      endDate: hackathonData.endDate,
    });
    if (existHackathon) {
      return res
        .status(409)
        .json({ message: "Hackathon with same information exists" });
    } else {
      const newHackathon = new Hackathon({
        ...hackathonData,
        owner: hackathonData.id,
      });
      await newHackathon.save();
      res.status(201).json({ message: "Hackathon saved successfully" });
    }
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: err?.message || "Error registering user." });
  }
});
