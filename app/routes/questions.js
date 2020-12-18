const express = require('express');
const router = express.Router();

const questionsController = require('../controllers/questionsController');


router.get('/questionone', questionsController.questionOne);
router.get('/questiontwo', questionsController.questionTwo);
router.get('/questionthree', questionsController.questionThree);


module.exports = router;