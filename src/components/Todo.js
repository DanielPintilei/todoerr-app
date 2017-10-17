import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, onEdit, onDelete, completed, text }) => {
  let content
  return (
    <li
      className='item'
      style={{
        textDecoration: completed ? 'line-through' : 'none',
      }}
    >
      <label className='label-checkbox'>
        <input
          type='checkbox'
          checked={completed}
          readOnly
          className='checkbox toggle'
        />
        <svg
          className='icon-checkbox'
          width='24'
          height='24'
          onClick={onClick}
        >
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
    </li>
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
