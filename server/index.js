// Configure Server
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Configure CORS
const corsOptions = {
    origin: process.env.FRONTEND_ORIGIN, // Change to '*' in development.
    methods: 'POST,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
    optionsSuccessStatus: 204
  };

// Middleware
app.use(express.json());
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

// Import Routes
const questionnaireRoutes = require('./routes/questionnaire');
const emailRoutes = require('./routes/email');


// Use Routes
app.use('/email', emailRoutes);
app.use('/questionnaire-responses', questionnaireRoutes);


// Start Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Export the Express API
module.exports = app;