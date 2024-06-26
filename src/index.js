const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const mainRoute = require("./routes/main");

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log("------checkingggg....")
  res.json({ status:200,message: "Welcome to backend server session check" });
});

app.use("/api", mainRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
