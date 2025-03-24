const User = require("../Model/user.model.js");

const registerUser = async (req, res) => {
  try {
    const userData = req.body;

    // Check if a user with the given email already exists
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists with this email." });
    }
    // Generate a unique username from the email
    const userUserName = userData.email.split("@")[0];
    let existingUsername = await User.findOne({ username: userUserName });

    if (existingUsername) {
      userUserName += Math.floor(Math.random() * 10000);
    }

    const password = userData.password;
    delete userData.password;

    // Create a new user instance
    const newUser = new User({
      username: userUserName,
      ...userData,
    });
    // Register the user (handles password hashing)
    await User.register(newUser, password);
    console.log("User registered successfully.");
    res.status(201).json({ message: "Register Successfully" });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: err?.message || "Error registering user." });
  }
};

module.exports = registerUser;
