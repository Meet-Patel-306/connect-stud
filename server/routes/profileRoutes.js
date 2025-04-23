const profileAuth = require("../controllers/profile.controller.js");
const User = require("../Model/user.model.js");
const router = require("express").Router({ mergeParams: true });

router.get("/", profileAuth);
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  console.log(user);
  res.send(user);
});
module.exports = router;
