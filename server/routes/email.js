const express = require('express')
const router = express.Router();
const emailController = require('../controllers/emailController');

// map routes
router.post('/send-gift-card', emailController.sendGiftCard)
router.post('/send-results', emailController.notifyWithResults)
router.post('/send-future-enrolments', emailController.notifyOfFutureResearch)


module.exports = router ;