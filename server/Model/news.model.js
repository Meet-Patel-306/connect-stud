const mongoose = require("mongoose");
const { Schema } = mongoose;

const newsSchema = new mongoose.Schema({
  newsCategory: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  newsIntro: { type: String, required: true },
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  ownerImage: { type: String },
  ownerName: { type: String },
  ownerLocation: { type: String },
  date: { type: Date, required: true },
});
const News = mongoose.model("News", newsSchema);

module.exports = News;
