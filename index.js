const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send({ resultado: Number(req.query.value) * 2 });
});

app.listen(3000, () => {
  console.log("server running!");
});
