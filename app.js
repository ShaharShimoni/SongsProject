const express = require("express");
const app = express();
var __dirname='views';


app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile('dashboard2.html', {root: __dirname })
});

