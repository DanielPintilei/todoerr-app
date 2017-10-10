import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  todosFetchData,
  toggleTodo,
  deleteTodo,
  toggleCheckboxAll,
} from '../actions'
import TodoList from '../components/TodoList'

class StatefulTodoList extends Component {
  static propTypes = {
    fetchData: PropTypes.func.isRequired,
  }
  componentDidMount () {
    this.props.fetchData('/todos/react')
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

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(todosFetchData(url)),
    onTodoClick: id => {
      dispatch(toggleTodo(id))
      dispatch(toggleCheckboxAll(false))
    },
    onTodoDelete: id => {
      dispatch(deleteTodo(id))
    },
  }
}

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(
  StatefulTodoList
)

export default VisibleTodoList
