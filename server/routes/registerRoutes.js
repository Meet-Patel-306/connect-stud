const router = require("express").Router({ mergeParams: true });
const registerUser = require("../controllers/register.controller.js");

router.post("/", registerUser);

module.exports = router;
