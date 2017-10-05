const Todos = require('../models/todoModel')

module.exports = function (app) {
  app.get('/api/setupTodos', function (req, res) {
    const starterTodos = [
      {
        username: 'react',
        todo: 'Be nice',
        isDone: false,
        hasAttachment: false,
      },
      {
        username: 'react',
        todo: 'Talk less',
        isDone: false,
        hasAttachment: false,
      },
    ]
    Todos.create(starterTodos, function (err, results) {
      if (err) throw err
      res.send(results)
    })
  })
}
