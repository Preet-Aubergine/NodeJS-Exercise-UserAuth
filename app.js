/* Module Dependencies */
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./src/config/database');
const authRoutes = require('./src/routes/auth');
const logger = require('./src/middlewares/logger');
const errorHandler = require('./src/middlewares/errorHandler');

/* Create Express Server */
const app = express();

/* Port Configuration */
const PORT = process.env.PORT || 3000;

/* Middlewares */
app.use(bodyParser.json());
app.use(logger);   // custom middleware

/* Routes */
app.use('/auth', authRoutes);

/* Error Handler Middleware */
app.use(errorHandler);

/* Connect to MongoDB database */
connectDB();

/8 Start Express server */
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
