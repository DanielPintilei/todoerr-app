const auth = require('../controllers/auth')
const todos = require('../controllers/todos')
const config = require('../config')
const verifyAuth = require('express-jwt')({
  secret: config.getSecret(),
  userProperty: 'payload',
})

module.exports = function (app) {
  app.post('/api/register', auth.register)
  app.post('/api/login', auth.login)
  app.post('/api/seed', verifyAuth, todos.seedTodos)
  app.get('/api/todos', verifyAuth, todos.getAll)
  app.get('/api/todo/:id', verifyAuth, todos.getById)
  app.post('/api/todo', verifyAuth, todos.postTodo)
  app.post('/api/todo-all', verifyAuth, todos.toggleAll)
  app.delete('/api/todo', verifyAuth, todos.deleteById)
  app.delete('/api/todos', verifyAuth, todos.deleteAll)
}
