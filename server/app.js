const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const methodOverride = require("method-override");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const http = require("http");
const { Server } = require("socket.io");

const User = require("./Model/user.model.js");
const Message = require("./Model/message.model.js");

const registerRoutes = require("./routes/registerRoutes.js");
const loginRoutes = require("./routes/loginRoutes.js");
const profileRoutes = require("./routes/profileRoutes.js");
const hackathonRoutes = require("./routes/hackathonRoutes.js");
const newsRoutes = require("./routes/newsRoutes.js");
const messageRoutes = require("./routes/messageRoutes.js");
const path = require("path");
const app = express();
app.set('trust proxy', 1);
app.use(methodOverride("_method"));

const cors = require("cors");
//socket io
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: process.env.HOST_FRONTEND, credentials: true },
});
app.use(
  cors({
    origin: process.env.HOST_FRONTEND,
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
        let user = await User.findOne({
          $or: [{ googleId: profile.id }, { email: profile.emails[0].value }],
        });

        console.log(profile);
        if (!user) {
          user = await User.create({
            googleId: profile.id,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            email: profile.emails[0].value,
            username: profile.emails[0].value.split("@")[0],
            ownerImage:
              "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg",
          });
        }
        // console.log(profile);
        return done(null, user);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

//connect to mongodb
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connect to mongodb"))
  .catch((err) => {
    // console.log(err);
    // console.log("error");
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
//hackathon
app.use("/api/hackathon", hackathonRoutes);
//news
app.use("/api/news", newsRoutes);
//message
app.use("/api/messages", messageRoutes);
// Socket.IO logic
io.on("connection", (socket) => {
  // console.log("Socket connected:", socket.id);
  // Join room with user's ID (client should send userId after connecting)
  socket.on("join", (userId) => {
    socket.join(userId);
    console.log(`User ${userId} joined room`);
  });
  // Handle incoming messages
  socket.on("sendMessage", async (data) => {
    const newMessage = new Message({
      ...data,
      isRead: false,
    });

    try {
      await newMessage.save();
      // console.log("Message saved");
      // Send only to the receiver's room
      io.to(data.receiver).emit("receiveMessage", newMessage);
    } catch (err) {
      // console.error("Failed to save message:", err);
    }
  });
  socket.on("disconnect", () => {
    // console.log("Socket disconnected:", socket.id);
  });
});

server.listen(3000);
module.exports = app;
