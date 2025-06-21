const mongoose = require(`mongoose`);

const DB_NAME = process.env.DB_NAME;
const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(`MongoDB connected to ${DB_NAME}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;