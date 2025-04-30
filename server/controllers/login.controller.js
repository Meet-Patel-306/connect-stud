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
const logOutUser = (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: "Error logging out" });
    }
    res.json({ message: "User Log out succesfully" }); // Redirect user after logging out (or any other route you prefer)
  });
};

module.exports = { localUserLogin, logOutUser };
