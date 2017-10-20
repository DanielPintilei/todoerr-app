const mongoose = require('mongoose')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  hash: String,
  salt: String,
})

const genHash = (password, salt) =>
  crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex')

userSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString('hex')
  this.hash = genHash(password, this.salt)
}
userSchema.methods.validPassword = function (password) {
  const hash = genHash(password, this.salt)
  return this.hash === hash
}
userSchema.methods.generateJwt = function () {
  const secret = process.env.SECRET
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
    },
    secret
  )
}

const User = mongoose.model('User', userSchema)

module.exports = User
