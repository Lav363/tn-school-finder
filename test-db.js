const mongoose = require("mongoose");

const MONGO_URI = "mongodb+srv://lavanyaviji410:rammulaavu410@cluster0.1wptcrn.mongodb.net/tnschools";

mongoose.connect(MONGO_URI, { serverSelectionTimeoutMS: 5000 })
  .then(() => {
    console.log("✅ Connected to MongoDB successfully!");
    mongoose.disconnect();
  })
  .catch(err => {
    console.error("❌ Connection failed:", err.message);
  });
