const router = require("express").Router({ mergeParams: true });
const registerUser = require("../controllers/register.controller.js");
const multer = require("multer");

const upload = multer({ storage: multer.memoryStorage() });

router.post("/", upload.single("ownerImage"), registerUser);

module.exports = router;
