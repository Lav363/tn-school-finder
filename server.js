// server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb+srv://lavanyaviji410:rammulaavu410@cluster0.1wptcrn.mongodb.net/tnschools", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Schema & Model
const schoolSchema = new mongoose.Schema({
  name: String,
  district: String,
  type: String,
  medium: String,
  latitude: Number,
  longitude: Number,
});
const School = mongoose.model("School", schoolSchema);

// Routes
app.get("/districts", async (req, res) => {
  const districts = await School.distinct("district");
  res.json(districts.sort());
});

app.get("/schools", async (req, res) => {
  const { district } = req.query;
  const schools = await School.find({ district });
  res.json(schools);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
