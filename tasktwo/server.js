const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/layoutDB";

// Enable CORS
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the application if unable to connect to MongoDB
  });

// Define MongoDB Schema
const dataSchema = new mongoose.Schema({
  componentA: String,
  componentB: String,
  componentC: String,
});

const Data = mongoose.model("Data", dataSchema);

app.use(bodyParser.json());

// Variables to track counts
let addCount = 0;
let updateCount = 0;

// Add Data API
app.post("/api/data/add", async (req, res) => {
  const newData = req.body;
  try {
    const createdData = await Data.create(newData);
    res.status(201).json(createdData);
    console.log(`add data controller = ${createdData}`);
    addCount++; // Increment addCount when data is added
  } catch (error) {
    console.error("Error adding data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update Data API
app.put("/api/data/update/:id", async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  try {
    const result = await Data.findByIdAndUpdate(id, updatedData, { new: true });
    res.json(result);
    updateCount++; // Increment updateCount when data is updated
  } catch (error) {
    console.error("Error updating data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Count API
app.get("/api/data/count", (req, res) => {
  res.json({ addCount, updateCount });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
