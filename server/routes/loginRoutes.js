const passport = require("passport");
const path = require("path");
//.env config
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
const {
  localUserLogin,
  logOutUser,
} = require("../controllers/login.controller.js");
const router = require("express").Router();

router.post("/login", localUserLogin);
router.get("/logout", logOutUser);
//google login
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: ,
  }),
  (req, res) => {
    // Successful authentication, redirect '/' page.
    res.redirect(process.env.HOST_FRONTEND);
  }
);
module.exports = router;
