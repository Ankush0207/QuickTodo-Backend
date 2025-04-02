require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const dbConnection = require("../Backend/Config/db");
const router = require("../Backend/Routes/todoRoutes");

const app = express();
app.use(cors());
app.use(express.json());
dbConnection();

app.get("/", async (req, res) => {
  console.log("my server is ready");
  res.send("Welcome to my Server");
});
app.use("/api", router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
