const router = require("express").Router({ mergeParams: true });
const registerUser = require("../controllers/register.controllers.js");

router.post("/", registerUser);

module.exports = router;
