//todo)) We will make connection with our database
// import mongoose which is Object Data Modelling library
const mongoose = require('mongoose');

//* we will write a function to connect to MongoDB Atlas
const connectDB = async () => {
  try {
    // MongoDB connection options using Stable API (recommended by MongoDB)
    const options = {
      serverApi: {
        version: '1',
        strict: true,
        deprecationErrors: true,
      }
    };

    // Connect to MongoDB Atlas with Stable API
    await mongoose.connect(process.env.MONGODB_URI, options);
    console.log('✅ MongoDB connected successfully 🍃');
    
    // Send a ping to confirm successful connection (optional)
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("🏓 Pinged your deployment. You successfully connected to MongoDB!");
    
  } catch (error) {
    console.error('❌ MongoDB Connection Failed', error.message);
    // process.exit(1); // stops the server just in case DB connection fails
  }
};

module.exports = connectDB;
