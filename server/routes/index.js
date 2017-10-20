const auth = require('../controllers/auth')
const todos = require('../controllers/todos')
const verifyAuth = require('express-jwt')({
  secret: process.env.SECRET,
  userProperty: 'payload',
})

module.exports = function (app) {
  app.post('/api/register', auth.register)
  app.post('/api/login', auth.login)
  app.get('/api/todos', verifyAuth, todos.getAll)
  app.get('/api/todo/:id', verifyAuth, todos.getById)
  app.post('/api/todo', verifyAuth, todos.postTodo)
  app.post('/api/todo-all', verifyAuth, todos.toggleAll)
  app.delete('/api/todo', verifyAuth, todos.deleteById)
  app.delete('/api/todos', verifyAuth, todos.deleteAll)
}
