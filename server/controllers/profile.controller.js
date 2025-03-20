const profileAuth = async (req, res) => {
  try {
    if (req.isAuthenticated()) {
      return res.json(req.user);
    }
    return res.status(401).json({ message: "Unauthorized" });
  } catch (error) {
    console.error("Error fetching user:", error);
    return res.status(500).json({ message: "Server Error" });
  }
};

module.exports = profileAuth;
