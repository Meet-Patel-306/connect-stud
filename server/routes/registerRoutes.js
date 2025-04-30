const router = require("express").Router({ mergeParams: true });
const {
  registerUser,
  sendOTPForRegistration,
  verifyAndRegisterUser,
} = require("../controllers/register.controller.js");
const multer = require("multer");

const upload = multer({ storage: multer.memoryStorage() });

router.post("/", upload.single("ownerImage"), registerUser);
router.post("/send-otp", sendOTPForRegistration);
router.post("/verify", upload.single("ownerImage"), verifyAndRegisterUser);

module.exports = router;
