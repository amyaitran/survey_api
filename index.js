const express = require('express')
const survey= require('./routes/survey')

const app = express()

app.use(express.urlencoded({ extended: true  }))
app.use(express.json())

app.use('/survey', survey)

module.exports = app
