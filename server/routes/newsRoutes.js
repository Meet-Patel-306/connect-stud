const router = require("express").Router();
const {
  newsPost,
  allNews,
  oneNews,
} = require("../controllers/news.controller");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
//all news data
router.get("/", allNews);
// post news
router.post("/post", upload.single("imageFile"), newsPost);
//one news data
router.get("/:id", oneNews);
module.exports = router;
