const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

//Connect DB
require("./connect/dbConnect");
// Init Middleware
app.use(cors());
app.use(express.json());

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

app.get("/", (req, res) => {
  res.send("Hello from Server");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
