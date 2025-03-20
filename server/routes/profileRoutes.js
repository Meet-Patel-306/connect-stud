const profileAuth = require("../controllers/profile.controller.js");
const router = require("express").Router({ mergeParams: true });

router.get("/", profileAuth);

module.exports = router;
