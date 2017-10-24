import React from 'react'
import PropTypes from 'prop-types'

const ButtonDelete = ({ onClick, todosToDelete }) => (
  <button onClick={() => onClick(todosToDelete)} className='button clear'>
    Clear Completed
  </button>
)

ButtonDelete.propTypes = {
  onClick: PropTypes.func.isRequired,
  todosToDelete: PropTypes.array.isRequired,
}

export default ButtonDelete
