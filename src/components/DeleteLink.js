import React from 'react'
import PropTypes from 'prop-types'

const DeleteLink = ({ onClick }) => {
  return (
    <button onClick={onClick} className='button clear'>
      Clear Completed
    </button>
  )
}

DeleteLink.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default DeleteLink
