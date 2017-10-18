const Todos = require('../models/todos')

const seedTodos = (req, res) => {
  const starterTodos = [
    {
      user: req.payload._id,
      text: 'Be nice',
      completed: false,
    },
    {
      user: req.payload._id,
      text: 'Talk less',
      completed: false,
    },
  ]
  Todos.create(starterTodos, (err, results) => {
    if (err) throw err
    res.send(results)
  })
}
const getAll = (req, res) => {
  if (!req.payload._id) {
    res.status(401).json({
      message: 'UnauthorizedError: private profile',
    })
  } else {
    Todos.find({ user: req.payload._id }, (err, todos) => {
      if (err) throw err
      res.send(todos)
    })
  }
}
const getById = (req, res) => {
  Todos.findById({ _id: req.params.id }, (err, todo) => {
    if (err) throw err
    res.send(todo)
  })
}
const postTodo = (req, res) => {
  if (req.body.id) {
    if (req.body.text) {
      Todos.findByIdAndUpdate(
        req.body.id,
        {
          text: req.body.text,
        },
        (err, todo) => {
          if (err) throw err
          res.send('Success')
        }
      )
    } else {
      Todos.findByIdAndUpdate(
        req.body.id,
        {
          completed: req.body.completed,
        },
        (err, todo) => {
          if (err) throw err
          res.send('Success')
        }
      )
    }
  } else {
    const newTodo = Todos({
      user: req.payload._id,
      text: req.body.text,
      completed: req.body.completed,
    })
    newTodo.save((err, todo) => {
      if (err) throw err
      res.send(todo._id)
    })
  }
}
const toggleAll = (req, res) => {
  Todos.update(
    {},
    {
      completed: req.body.completed,
    },
    { multi: true },
    (err, todo) => {
      if (err) throw err
      res.send('Success')
    }
  )
}
const deleteById = (req, res) => {
  Todos.findByIdAndRemove(req.body.id, err => {
    if (err) throw err
    res.send('Success')
  })
}
const deleteAll = (req, res) => {
  req.body.ids.forEach(id => {
    Todos.findByIdAndRemove(id, err => {
      if (err) throw err
    })
  })
  res.send(req.body)
}

module.exports = {
  seedTodos,
  getAll,
  getById,
  postTodo,
  toggleAll,
  deleteById,
  deleteAll,
}
