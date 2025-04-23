const Message = require("../Model/message.model");
const User = require("../Model/user.model");
const router = require("express").Router();

router.get("/:user1/:user2", async (req, res) => {
  const { user1, user2 } = req.params;
  const { lastMsgDate, limit = 100 } = req.query;

  const query = {
    $or: [
      { sender: user1, receiver: user2 },
      { sender: user2, receiver: user1 },
    ],
  };

  if (lastMsgDate && lastMsgDate.length) {
    query.timestamp = { $lt: new Date(lastMsgDate) };
  }

  try {
    const messages = await Message.find(query)
      .sort({ timestamp: -1 }) // newest first
      .limit(parseInt(limit));

    res.json(messages.reverse()); // oldest to newest
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});
module.exports = router;
