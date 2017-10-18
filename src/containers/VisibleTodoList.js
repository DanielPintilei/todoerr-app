import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  todosFetchData,
  toggleTodo,
  editTodo,
  deleteTodo,
  toggleCheckboxAll,
} from '../actions'
import TodoList from '../components/TodoList'

class StatefulTodoList extends Component {
  static propTypes = {
    fetchData: PropTypes.func.isRequired,
  }
  componentDidMount () {
    this.props.fetchData('/todos')
  }
  render () {
    return <TodoList {...this.props} />
  }
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      return todos
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
  hasErrored: state.todosHasErrored,
  isLoading: state.todosIsLoading,
})

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(todosFetchData(url)),
  onTodoClick: (id, completed) => {
    dispatch(toggleTodo(id, completed))
    dispatch(toggleCheckboxAll(false))
  },
  onTodoEdit: (id, text) => {
    dispatch(editTodo(id, text))
  },
  onTodoDelete: id => {
    dispatch(deleteTodo(id))
  },
})

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(
  StatefulTodoList
)

export default VisibleTodoList
