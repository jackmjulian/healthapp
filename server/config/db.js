const mongoose = require('mongoose');

const connectDB = async () => {
  // have to await as mongoose.connect returns a promise
  const conn = await mongoose.connect(process.env.MONGO_URI);
  // Logging the host to make sure it is working
  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

mongoose.set('strictQuery', true);

module.exports = connectDB;
