const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("./Model/user.model");
const registerRoutes = require("./routes/registerRoutes.js");
const loginRoutes = require("./routes/loginRoutes.js");
const profileRoutes = require("./routes/profileRoutes.js");
const path = require("path");
const app = express();

const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//.env config
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
console.log(process.env.MONGO_URL);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: "meetpatel",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

//initialization passport.js
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(
  new LocalStrategy({ usernameField: "email" }, User.authenticate())
);
// Google OAuth Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
          user = await User.create({
            googleId: profile.id,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            email: profile.emails[0].value,
          });
        }
        console.log(profile);
        return done(null, user);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

//connect to mongodb
mongoose
  .connect("mongodb://localhost:27017/connectStud")
  .then(() => console.log("connect to mongodb"))
  .catch((err) => {
    console.log(err);
    console.log("error");
  });

app.get("/", function (req, res) {
  res.send("Hello meet");
});

//register
app.use("/api/register", registerRoutes);
//login
app.use("/auth", loginRoutes);
//profile
app.use("/api/profile", profileRoutes);

app.listen(3000);
