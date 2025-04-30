const profileAuth = require("../controllers/profile.controller.js");
const User = require("../Model/user.model.js");
const Hackathon = require("../Model/hackathon.model.js");
const News = require("../Model/news.model.js");
const multer = require("multer");
const imagekit = require("../config/imagekit.config");
const upload = multer({ storage: multer.memoryStorage() });
const router = require("express").Router({ mergeParams: true });

router.get("/", profileAuth);
//all users data
router.get("/allusers", async (req, res) => {
  try {
    if (req.isAuthenticated()) {
      const page = parseInt(req.query.page) || 1; // Default to page 1
      const limit = parseInt(req.query.limit) || 30; // Default 30 items per page
      //how many page or data need to skip
      // ex: current page is 3 and limit is 10 then (3-1)*10 = 20 data need to skip
      const skip = (page - 1) * limit;
      const usersData = await User.find().skip(skip).limit(limit);
      // console.log("user:", usersData);
      return res.json({
        page,
        limit,
        users: usersData,
      });
    }
    return res.status(401).json({ message: "Unauthorized" });
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
});
router.put("/edit", upload.single("imageFile"), async (req, res) => {
  try {
    const userData = JSON.parse(req.body.registerFormData);
    const { id } = req.body;
    let imageURL = "";
    if (req.file && req.file.buffer) {
      const image = await imagekit.upload({
        file: req.file.buffer,
        fileName: req.file.originalname + userUserName,
      });
      imageURL = image.url;
    }
    const updateData = { ...userData };
    if (req.file) {
      updateData.ownerImage = imageURL;
    }
    const updatedUser = await User.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "Profile updated", user: updatedUser });
  } catch (err) {
    return res.status(500).json({ message: "Server Error" });
  }
});
router.get("/search", async (req, res) => {
  try {
    const { Name, jobtitle, company, GraduationYear, college } = req.query;
    let query = {};

    if (Name) {
      query.firstName = { $regex: Name, $options: "i" };
    }
    if (jobtitle) {
      query.jobtitle = { $regex: jobtitle, $options: "i" };
    }
    if (GraduationYear) {
      query["colleges.endYear"] = { $regex: GraduationYear, $options: "i" };
    }
    if (company) {
      query["experiences.company"] = { $regex: company, $options: "i" };
    }
    if (college) {
      query["colleges.college"] = { $regex: college, $options: "i" };
    }
    const users = await User.find(query);
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  console.log(user);
  res.json(user);
});
router.get("/:id/post", async (req, res) => {
  try {
    const { id } = req.params;
    if (req.isAuthenticated()) {
      const postHackathon = await Hackathon.find({ owner: id });
      const postNews = await News.find({ owner: id });
      return res.json({ postHackathon, postNews });
    }
    return res.status(401).json({ message: "Unauthorized" });
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
});
module.exports = router;
