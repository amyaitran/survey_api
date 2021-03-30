const express = require('express')
const router = express.Router()

const surveyService = require('../services/survey.service')

router.get('/', surveyService.getSurvey)

module.exports = router
