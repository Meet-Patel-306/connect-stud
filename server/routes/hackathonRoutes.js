const router = require("express").Router();
const Hackathon = require("../Model/hackathon.model");

router.get("/", async (req, res) => {
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
});

// post hackathon
router.post("/post", async (req, res) => {
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
});

module.exports = router;
