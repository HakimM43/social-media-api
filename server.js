const express = require("express");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

const client = new MongoClient(process.env.MONGO_URI);

app.get("/", async (req, res) => {
  try {
    await client.connect();

    res.json({
      message: "Successfully connected to the database!",
    });
  } catch (error) {
    console.error("Database connection error:", error);

    res.status(500).json({
      message: "Failed to connect to the database.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});