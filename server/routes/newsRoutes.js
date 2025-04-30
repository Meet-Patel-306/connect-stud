const router = require("express").Router();
const {
  newsPost,
  allNews,
  oneNews,
} = require("../controllers/news.controller");
const multer = require("multer");
const axios = require("axios");
const upload = multer({ storage: multer.memoryStorage() });
const News = require("../Model/news.model");
const path = require("path");
//.env config
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

//all news data
router.get("/", allNews);
// post news
router.post("/post", upload.single("imageFile"), newsPost);
router.get("/search", async (req, res) => {
  try {
    const { title, newsCategory } = req.query;
    let query = {};

    if (title) {
      query.title = { $regex: title, $options: "i" };
    }
    if (newsCategory) {
      query.newsCategory = { $regex: newsCategory, $options: "i" };
    }

    const news = await News.find(query);
    res.json(news);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});
router.post("/summary", async (req, res) => {
  const text = req.body.text;
  if (!text || typeof text !== "string") {
    // console.log(text, typeof text);
    return res.status(400).json({ error: "Invalid or missing 'text' field." });
  }
  try {
    const response = await axios.post(
      "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
      { inputs: text },
      {
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
        },
      }
    );

    const summary = response.data[0]?.summary_text || "No summary returned.";
    res.json({ summary });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate summary" });
  }
});
//one news data
router.get("/:id", oneNews);
module.exports = router;
