const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); 
require("dotenv").config();

const app = express();

// Middleware
app.use(cors()); 
app.use(express.json());

// Database Connection with Mongoose
const dbURL = process.env.DB_URI;

mongoose
  .connect(dbURL)
  .then(() => {
    console.log("Mongoose connected successfully");
  })
  .catch((error) => console.error("MongoDB connection error:", error));

// Basic Route
app.get("/", (req, res) => {
  res.send("Hello server");
});

// Start the Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
