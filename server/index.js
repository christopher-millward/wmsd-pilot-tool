// Configure Server
require('dotenv').config();
const {google} = require('googleapis');
const express = require('express');
const app = express();
const port = 5000;
 
// Middleware
// bring in JSON?

// Import Routes
const questionnaireRoutes = require('./routes/questionnaire');
const emailRoutes = require('./routes/email');


// Use Routes
app.use('/email', emailRoutes);
app.use('/questionnaire-responses', questionnaireRoutes);


// Start Server
app.use("/", (req, res)=>{
    res.send("Server is running")
})
app.listen(port, console.log(`Server is running on port ${port}`))