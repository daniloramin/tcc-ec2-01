const express = require("express");

const app = express();

app.get("/:value", (req, res) => {
  return res.send({ resultado: Number(req.params.value) * 2 });
});

app.listen(3000, () => {
  console.log("server running!");
});
