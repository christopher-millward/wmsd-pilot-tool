// Configure Server
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Configure CORS
const corsOptions = {
    origin: process.env.FRONTEND_ORIGIN,
    methods: 'POST',
    credentials: true,
    optionsSuccessStatus: 204,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

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