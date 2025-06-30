// seed.js
const mongoose = require("mongoose");
const fs = require("fs");

const MONGO_URI = "mongodb+srv://lavanyaviji410:rammulaavu410@cluster0.1wptcrn.mongodb.net/tnschools";

const schoolSchema = new mongoose.Schema({
  name: String,
  district: String,
  type: String,
  medium: String,
  latitude: Number,
  longitude: Number,
});
const School = mongoose.model("School", schoolSchema);

const data = JSON.parse(fs.readFileSync("sample_schools.json", "utf8"));

async function seedDB() {
  try {
    console.log("🔌 Connecting to MongoDB...");
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected!");

    await School.deleteMany({});
    console.log("🧹 Cleared old school data");

    await School.insertMany(data);
    console.log("✅ Sample schools inserted");

  } catch (err) {
    console.error("❌ Error:", err.message);
  } finally {
    mongoose.disconnect();
  }
}

seedDB();
