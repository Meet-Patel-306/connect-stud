const mongoose = require("mongoose");
const { Schema } = mongoose;

const newsSchema = new mongoose.Schema({
  newsCategory: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  newsIntro: { type: String, required: true },
  newsImage: {
    type: String,
    set: (v) =>
      v ||
      "https://img.etimg.com/thumb/width-1600,height-900,imgsize-644351,resizemode-75,msid-80277917/tech/tech-bytes/ettech-morning-dispatch-on-15-jan-2021-top-tech-news-to-start-your-day.jpg",
  },
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  ownerImage: { type: String },
  ownerName: { type: String },
  ownerLocation: { type: String },
  date: { type: Date, required: true },
});
const News = mongoose.model("News", newsSchema);

module.exports = News;
