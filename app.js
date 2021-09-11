const express = require("express");
const app = express();
var __dirname='views';

var PORT=process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Application started and Listening on port 3000");
});

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile('dashboard.html', {root: __dirname })
});

