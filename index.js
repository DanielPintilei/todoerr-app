const express = require('express')
const app = express()
const mongoose = require('mongoose')
const config = require('./server/config')
const setupController = require('./server/controllers/setupController')
const apiController = require('./server/controllers/apiController')

const port = process.env.PORT || 3300

if (!process.env.NOW) {
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
  })
}

app.use(express.static('build'))

mongoose.connect(config.getDbConnectionString())

setupController(app)
apiController(app)

app.listen(port)
