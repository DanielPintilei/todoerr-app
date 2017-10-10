const Todos = require('../models/todoModel')
const bodyParser = require('body-parser')

module.exports = function (app) {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.get('/api/todos/:uname', function (req, res) {
    Todos.find({ username: req.params.uname }, function (err, todos) {
      if (err) throw err
      res.send(todos)
    })
  })
  app.get('/api/todo/:id', function (req, res) {
    Todos.findById({ _id: req.params.id }, function (err, todo) {
      if (err) throw err
      res.send(todo)
    })
  })
  app.post('/api/todo', function (req, res) {
    if (req.body.id) {
      Todos.findByIdAndUpdate(
        req.body.id,
        {
          // text: req.body.text,
          completed: req.body.completed,
        },
        function (err, todo) {
          if (err) throw err
          res.send('Success')
        }
      )
    } else {
      const newTodo = Todos({
        username: 'react',
        text: req.body.text,
        completed: req.body.completed,
      })
      newTodo.save(function (err, todo) {
        if (err) throw err
        res.send(todo._id)
      })
    }
  })
  app.post('/api/todo-all', function (req, res) {
    Todos.update(
      {},
      {
        completed: req.body.completed,
      },
      { multi: true },
      function (err, todo) {
        if (err) throw err
        res.send('Success')
      }
    )
  })
  app.delete('/api/todo', function (req, res) {
    Todos.findByIdAndRemove(req.body.id, function (err) {
      if (err) throw err
      res.send('Success')
    })
  })
  app.delete('/api/todos', function (req, res) {
    req.body.ids.forEach(id => {
      Todos.findByIdAndRemove(id, function (err) {
        if (err) throw err
      })
    })
    console.log(req.body)
    res.send(req.body)
  })
}
