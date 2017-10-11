const mongoose = require('mongoose')

const Schema = mongoose.Schema

const todoSchema = new Schema({
  username: String,
  text: String,
  completed: Boolean,
})

const Todos = mongoose.model('Todos', todoSchema)

module.exports = Todos
