const passport = require('passport')
const User = require('../models/user')

const invalidReq = (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.status(400)
    res.json({ message: 'All fields required' })
    return true
  }
}

const register = (req, res) => {
  if (invalidReq(req, res)) return
  const user = new User()
  user.email = req.body.email
  user.setPassword(req.body.password)
  user.save(err => {
    if (err) throw err
    const token = user.generateJwt()
    res.status(200)
    res.json({ token })
  })
}

const login = (req, res) => {
  if (invalidReq(req, res)) return
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      res.status(404).json({ message: err })
      return
    }
    if (user) {
      const token = user.generateJwt()
      res.status(200)
      res.json({ token })
    } else res.status(401).json({ message: info })
  })(req, res)
}

module.exports = {
  register,
  login,
}
