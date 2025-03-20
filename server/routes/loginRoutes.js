const passport = require("passport");
const localUserLogin = require("../controllers/login.controller.js");
const router = require("express").Router();

router.post("/login", localUserLogin);

//google login
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:5173/login",
  }),
  (req, res) => {
    // Successful authentication, redirect '/' page.
    res.redirect("http://localhost:5173/");
  }
);
module.exports = router;
