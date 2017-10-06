const Todos = require('../models/todoModel')

module.exports = function (app) {
  app.get('/api/setup-todos', function (req, res) {
    const starterTodos = [
      {
        username: 'react',
        text: 'Be nice',
        completed: false,
      },
      {
        username: 'react',
        text: 'Talk less',
        completed: false,
      },
    ]
    Todos.create(starterTodos, function (err, results) {
      if (err) throw err
      res.send(results)
    })
  })
}
