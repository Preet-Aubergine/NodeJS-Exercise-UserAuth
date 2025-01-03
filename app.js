const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./src/config/database');
const authRoutes = require('./src/routes/auth');
const logger = require('./src/middlewares/logger');
const errorHandler = require('./src/middlewares/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(logger);

// Routes
app.use('/auth', authRoutes);

app.use(errorHandler);

// Connect to database
connectDB();

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
