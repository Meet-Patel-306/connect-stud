const passport = require("passport");

const router = require("express").Router();

router.get(
  "/",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/callback", (req, res, next) => {
  passport.authenticate("google", (err, user, info) => {
    if (err) {
      return res
        .status(500)
        .json({ authorize: false, message: "Internal Server Error" });
    }
    if (!user) {
      return res.status(401).json({
        authorize: false,
        message: info?.message || "Invalid credentials",
      });
    }
    req.logIn(user, (loginErr) => {
      if (loginErr) {
        return res
          .status(500)
          .json({ authorize: false, message: "Login Failed" });
      }
      return res.json({
        authorize: true,
        message: "Login successful",
        user: { _id: user._id, email: user.email },
      });
    });
  })(req, res, next);
});

module.exports = router;
