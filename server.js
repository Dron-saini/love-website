const express = require("express");
const app = express();
const path = require("path");

// Serve static files from 'public' folder
app.use(express.static("public"));

// Optional: If someone visits "/", send them index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
