const router = require("express").Router();
const News = require("../Model/news.model");
const mongoose = require("mongoose");
//all news data
router.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Default to page 1
    const limit = parseInt(req.query.limit) || 10; // Default 10 items per page
    //how many page or data need to skip
    // ex: current page is 3 and limit is 10 then (3-1)*10 = 20 data need to skip
    const skip = (page - 1) * limit;
    const newsData = await News.find().skip(skip).limit(limit);
    res.json({
      page,
      limit,
      news: newsData,
    });
  } catch (err) {
    res.json({
      message: err?.message || "News Data Not Found from Server",
    });
  }
});

// post news
router.post("/post", async (req, res) => {
  try {
    const newsData = req.body.news;
    const { userId, userName, userImage } = req.body;
    const newNews = new News({
      ...newsData,
      owner: userId,
      ownerName: userName,
      ownerImage: userImage,
    });
    await newNews.save();
    res
      .status(201)
      .json({ message: "News saved successfully", register: "true" });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: err?.message || "Error registering user." });
  }
});

//one news data
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      return res
        .status(400)
        .json({ message: "Bad Request Use Vaild Hackathon Id" });
    }
    const newsInfo = await News.findById(id);
    if (!newsInfo) {
      return res.status(404).json({ message: "News Data Not Found" });
    }
    res.status(200).json({ message: newsInfo });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something is wrong." });
  }
});
module.exports = router;
