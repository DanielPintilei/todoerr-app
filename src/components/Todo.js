import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 7px;
  padding: 2px 8px;
  &:hover {
    background-color: aliceblue;
  }
  &:not(:hover) .edit,
  &:not(:hover) .delete {
    visibility: hidden;
  }
  .checkbox {
    flex-shrink: 0;
  }
  .item-text {
    flex-grow: 1;
    margin: 0 10px;
    padding: 4px 10px;
    font-size: 15px;
    color: midnightblue;
    &:focus {
      outline: 1px dashed plum;
    }
  }
  .edit,
  .delete {
    flex-shrink: 0;
    opacity: 0.7;
  }
`

const Todo = ({ onClick, onEdit, onDelete, completed, text }) => {
  let content
  return (
    <ListItem style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      <label className='label-checkbox'>
        <input
          type='checkbox'
          checked={completed}
          readOnly
          className='checkbox toggle'
        />
        <svg className='icon-checkbox' width='24' height='24' onClick={onClick}>
          <use className='off' xlinkHref='#iconCheck' />
          <use className='on' xlinkHref='#iconCheckOn' />
        </svg>
      </label>
      <p
        className='item-text'
        onBlur={e => {
          onEdit(e.target.innerText)
          content.contentEditable = false
        }}
        ref={node => {
          content = node
        }}
      >
        {text}
      </p>
      <button
        className='edit'
        onClick={() => {
          content.contentEditable = true
          content.focus()
        }}
      >
        <svg className='icon-edit' width='24' height='24'>
          <use className='' xlinkHref='#iconEdit' />
        </svg>
      </button>
      <button onClick={onDelete} className='delete'>
        <svg className='icon-delete' width='24' height='24'>
          <use className='' xlinkHref='#iconDelete' />
        </svg>
      </button>
    </ListItem>
  )
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Todo
