const mongoose = require('mongoose');

async function connectDB() {
  const mongoURI = 'mongodb+srv://achaitanyakumar3112:ACK@123@cluster0.nqkjmdy.mongodb.net/expencemeter';

  console.log('MongoDB URI:', mongoURI);

  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true  
    });
    console.log('Connected to MongoDB');
    // Additional code if needed
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

module.exports = connectDB;
