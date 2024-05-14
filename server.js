const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send({
    status: "success",
    messages: "server is running",
  });
});

app.listen(port, () => {
  console.log(`app is listening at port: ${port}`);
});
