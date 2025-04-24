const profileAuth = require("../controllers/profile.controller.js");
const User = require("../Model/user.model.js");
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
      console.log("user:", usersData);
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
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  console.log(user);
  res.send(user);
});
module.exports = router;
