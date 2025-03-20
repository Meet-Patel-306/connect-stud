const passport = require("passport");

const localUserLogin = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
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
      return res.json({ message: "Login" });
    });
  })(req, res, next);
};

module.exports = localUserLogin;
