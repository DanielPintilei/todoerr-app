import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, onDelete, completed, text }) => (
  <li
    className='item'
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    <label className='label-checkbox'>
      <input type='checkbox' checked={completed} className='checkbox toggle' />
      <svg
        className='icon icon-checkbox'
        width='24'
        height='24'
        onClick={onClick}
      >
        <use className='off' xlinkHref='#iconCheck' />
        <use className='on' xlinkHref='#iconCheckOn' />
      </svg>
    </label>
    <p className='item-text'>{text}</p>
    <button className='edit'>
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

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Todo
