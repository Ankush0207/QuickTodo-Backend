const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Connected Successfully!");
  } catch (error) {
    console.error("Connection failed", error.message);
    throw error;
  }
};

module.exports = dbConnection;
