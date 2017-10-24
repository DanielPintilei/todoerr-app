import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Todo from './Todo'

const NoList = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: gray;
`

const List = styled.ul`
  flex-grow: 1;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 0;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 8px;
    background-color: lavender;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: plum;
  }
`

const TodoList = ({
  todos,
  onTodoClick,
  onTodoEdit,
  onTodoDelete,
  hasErrored,
  isLoading,
}) =>
  hasErrored || isLoading ? (
    <NoList>. . .</NoList>
  ) : (
    <List>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id, todo.completed)}
          onEdit={text => onTodoEdit(todo.id, text)}
          onDelete={() => onTodoDelete(todo.id)}
        />
      ))}
    </List>
  )

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
