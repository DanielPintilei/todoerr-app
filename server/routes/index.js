const auth = require('../controllers/auth')
const todos = require('../controllers/todos')
const config = require('../config')
var jwt = require('express-jwt')({
  secret: config.getSecret(),
  userProperty: 'payload',
})

module.exports = function (app) {
  app.post('/api/register', auth.register)
  app.post('/api/login', auth.login)
  app.get('/api/seed', jwt, todos.seedTodos)
  app.get('/api/todos', jwt, todos.getAll)
  app.get('/api/todo/:id', jwt, todos.getById)
  app.post('/api/todo', jwt, todos.postTodo)
  app.post('/api/todo-all', jwt, todos.toggleAll)
  app.delete('/api/todo', jwt, todos.deleteById)
  app.delete('/api/todos', jwt, todos.deleteAll)
}
