import React from 'react'
import PropTypes from 'prop-types'

const DeleteLink = ({ onClick, todosToDelete }) => (
  <button onClick={() => onClick(todosToDelete)} className='button'>
    Clear Completed
  </button>
)

DeleteLink.propTypes = {
  onClick: PropTypes.func.isRequired,
  todosToDelete: PropTypes.array.isRequired,
}

export default DeleteLink
