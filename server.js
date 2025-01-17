const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// 정적 파일 제공
app.use(express.static("public"));

// HTML 파일 제공
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
