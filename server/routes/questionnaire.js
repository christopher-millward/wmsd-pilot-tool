const express = require('express');
const { postResponse } = require('../controllers/questionnaireController');
const router = express.Router();

// route to POST questionnaire responses
router.post('/submit', postResponse)

module.exports = router;