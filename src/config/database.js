/* Module Dependencies */
const mongoose = require('mongoose');
require('dotenv').config();

/* Connect to MongoDB :
  
 - @returns {Promise<void>} - A promise that resolves when the connection is successful.
 - @throws {Error} - Throws an error if the connection fails.
*/
const connectDB = async () => {
    const { MONGO_USER, MONGO_PASSWORD, MONGO_CLUSTER, MONGO_DB_NAME } = process.env;
    const mongoURI = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_CLUSTER}/${MONGO_DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB');
    }
    catch (error) {
        console.error('An error occurred while connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
