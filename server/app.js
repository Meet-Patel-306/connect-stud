const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello meet");
});

app.listen(3000);
