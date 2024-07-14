const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("Shopping Chart");
});

app.listen(3000, function () {
  console.log("Shopping chart api at localhost:3000");
});
