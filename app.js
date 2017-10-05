const express = require('express')
const app = express()
const mongoose = require('mongoose')
const config = require('./config')
const setupController = require('./controllers/setupController')
const apiController = require('./controllers/apiController')

const port = process.env.PORT || 3300

app.use(express.static('build'))

mongoose.connect(config.getDbConnectionString())

setupController(app)
apiController(app)

app.listen(port)
