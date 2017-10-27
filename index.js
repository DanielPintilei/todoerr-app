require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const routes = require('./server/routes')

const User = mongoose.model('User')
passport.use(
  new LocalStrategy({ usernameField: 'email' }, (username, password, done) => {
    User.findOne({ email: username }, (err, user) => {
      if (err) return done(err)
      if (!user) return done(null, false, { message: 'User not found' })
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Password is wrong' })
      }
      return done(null, user)
    })
  })
)

if (process.env.NODE_ENV !== 'production') {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE')
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    )
    next()
  })
}
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(passport.initialize())
app.use(express.static('build'))
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401)
    res.json({ message: `${err.name}: ${err.message}` })
  }
})

mongoose.Promise = global.Promise
mongoose.connect(process.env.DB, { useMongoClient: true })

routes(app)

const port = process.env.PORT || 3300
app.listen(port)
