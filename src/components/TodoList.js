import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({
  todos,
  onTodoClick,
  onTodoEdit,
  onTodoDelete,
  hasErrored,
  isLoading,
}) => {
  return hasErrored || isLoading ? (
    <div className='no-list'>. . .</div>
  ) : (
    <ul className='list'>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id, todo.completed)}
          onEdit={text => onTodoEdit(todo.id, text)}
          onDelete={() => onTodoDelete(todo.id)}
        />
      ))}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  hasErrored: PropTypes.bool,
  isLoading: PropTypes.bool,
  onTodoClick: PropTypes.func.isRequired,
  onTodoEdit: PropTypes.func.isRequired,
  onTodoDelete: PropTypes.func.isRequired,
}

export default TodoList
