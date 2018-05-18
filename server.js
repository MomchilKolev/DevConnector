const express = require("express");
const mongoose = require("mongoose");

// API Routes
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

// Connect to DB
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db)
  .then(() => console.log("DB Connected..."))
  .catch(err => console.log(`Error`, err));

app.get("/", (req, res) => {
  res.send("Index reached");
});

// Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
